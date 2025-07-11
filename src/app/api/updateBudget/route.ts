import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { engagement, activityId, newBudget } = await req.json();
  
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          type: "service_account",
          project_id: process.env.GOOGLE_PROJECT_ID,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });
  
      const sheets = google.sheets({ version: "v4", auth });
  
      const sheetId = process.env.SHEET_ID || "";
  
      const res = await sheets.spreadsheets.values.get({
        spreadsheetId: sheetId,
        range: "Activities!A:D", // Engagement, ActivityID, Activity名, 予算
      });
  
      const rows = res.data.values || [];
      const targetRowIndex = rows.findIndex(
        (r) => r[0] === engagement && r[1] === activityId
      );
  
      if (targetRowIndex === -1) {
        throw new Error("該当のアクティビティが見つかりません");
      }
  
      const rangeToUpdate = `Activities!D${targetRowIndex + 1}`;
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: rangeToUpdate,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [[newBudget.toString()]],
        },
      });
  
      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("❌ 予算更新エラー:", error);
      return NextResponse.json({ error: "予算更新に失敗しました" }, { status: 500 });
    }
  }
  