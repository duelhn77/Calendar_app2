import { google } from "googleapis";
import { NextResponse } from "next/server";
import { parse } from "json2csv";
import ExcelJS from "exceljs";

const SHEET_ID = process.env.SHEET_ID || "";

export async function POST(req: Request) {
  try {
    const { startDate, endDate, format, userId } = await req.json(); // 🔹 `userId` を追加

    console.log("📤 API 受信:", { startDate, endDate, format, userId });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    // ✅ スプレッドシートからデータを取得
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: "TimeSheet!A:Z", // 🔹 カラム数が変動しても全て取得
    });

    const rows = response.data.values || [];
    console.log("📊 取得データ:", rows.length, "件");

    if (rows.length < 2) throw new Error("データが見つかりません");

    const headers = rows[0]; // 🔹 ヘッダー行
    const dataRows = rows.slice(1); // 🔹 実データ

    // 🔹 ヘッダーからカラムのインデックスを取得
    const userIdIndex = headers.indexOf("UserID");
    const startIndex = headers.indexOf("Start");
    const endIndex = headers.indexOf("End");

    if (userIdIndex === -1 || startIndex === -1 || endIndex === -1) {
      throw new Error("必要なカラムがスプレッドシートに見つかりません");
    }

    // ✅ ユーザーIDと期間でフィルタリング
    const filteredData = dataRows.filter(row => {
      const rowUserId = row[userIdIndex]; // `UserID` のカラム
      const rowStart = new Date(row[startIndex]); // `Start` のカラム
      const rowEnd = new Date(row[endIndex]);   // `End` のカラム

      const rowStartDate = rowStart.toISOString().split("T")[0];
      const rowEndDate = rowEnd.toISOString().split("T")[0];

      // ✅ `userId` が指定されている場合は、そのユーザーのみを抽出
      const userFilter = userId ? rowUserId === userId : true;
      const dateFilter = rowStartDate >= startDate && rowEndDate <= endDate;

      return userFilter && dateFilter;
    });

    console.log("📊 フィルタ後:", filteredData.length, "件");

    if (!filteredData.length) throw new Error("指定期間のデータがありません");

    let fileBuffer;
    let contentType;
    let fileExtension;

    if (format === "csv") {
      // ✅ CSV 形式でエクスポート
      const csv = parse(filteredData, {
        fields: headers,
        quote: '"',
        delimiter: ",",
      });

      fileBuffer = Buffer.from(csv, "utf-8");
      contentType = "text/csv";
      fileExtension = "csv";
    } else {
      // ✅ Excel 形式でエクスポート
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet("Exported Data");

      worksheet.addRow(headers);
      filteredData.forEach(row => worksheet.addRow(row));

      fileBuffer = await workbook.xlsx.writeBuffer();
      contentType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      fileExtension = "xlsx";
    }

    console.log("📂 ファイル生成完了: export." + fileExtension);

    return new Response(fileBuffer, {
      headers: {
        "Content-Type": contentType,
        "Content-Disposition": `attachment; filename="export_${startDate}_${endDate}.${fileExtension}"`,
      },
    });
  } catch (error) {
    console.error("❌ エクスポートエラー:", error);
    return NextResponse.json({ 
      error: (error as Error).message, 
      stack: (error as Error).stack
    }, { status: 500 });
  }
}

