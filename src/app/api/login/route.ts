import { runQuery } from "@/util/server/queryService";
import { UserType } from "@/util/type";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return new NextResponse(
        JSON.stringify({ error: "Email эсвэл Password оруулна уу!" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    const getUserQuery = `SELECT * FROM "user" `;
    const users: UserType[] = await runQuery(getUserQuery, [email]);

    if (users.length === 0) {
      return new NextResponse(JSON.stringify({ error: "user not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const user = users[0];
    console.log(user);

    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if (!isPasswordValid) {
      return new NextResponse(JSON.stringify({ error: "password buruu bn" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
    // const getProfileQuery = ``;
    // const profiles: user[] = await runQuery(getProfileQuery, values);

    return new NextResponse(
      JSON.stringify({ users, message: "amjilttai nevterlee", profile: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Failed to run query:", err);
    return new NextResponse(JSON.stringify({ error: "Failed to run query" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
