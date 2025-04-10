import { runQuery } from "@/util/server/queryService";
import { NextResponse } from "next/server";

export async function POST(req: Request): Promise<Response> {
  try {
    const { addPhoto, name, about, social, userId } = await req.json();
    const insertProfile = `INSERT INTO "public"."Profile" ("avatarImage", name, about, "socialMediaURL") VALUES ($1, $2, $3, $4) RETURNING *`;
    const insertedProfile = await runQuery(insertProfile, [
      addPhoto,
      name,
      about,
      social,
    ]);
    // update user profileId with insertedProfile.id
    if (!insertProfile) {
      return new NextResponse(
        JSON.stringify({ error: "Profile created error" }),
        {
          status: 400,
        }
      );
    }
    // uusgesen useriinhee profileId -r negtgej profile uusgeh
    const updateUser = `UPDATE "user" SET "profileId" = $1 WHERE "id" = $2;`;
    await runQuery(updateUser, [insertedProfile[0].id, userId]);
    return new NextResponse(
      JSON.stringify({
        profile: insertedProfile,
        message: "Success created done",
      })
    );
  } catch (error) {
    console.log(error);
    return new NextResponse(JSON.stringify({ message: "aldaa garlaa" }));
  }
}
