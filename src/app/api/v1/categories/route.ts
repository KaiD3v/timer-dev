import prismaClient from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../../lib/auth";
import { NextResponse } from "next/server";

export default async function POST(request: Request, response: Response) {
  const session = await getServerSession(authOptions);
  if (!session || !session.user) {
    return NextResponse.json({ error: "Unauthorized " }, { status: 401 });
  }

  const { name, projects } = await request.json();

  try {
    await prismaClient.category.create({
      data: { name: name, projects: projects, userId: session?.user.id },
    });

    return NextResponse.json(
      { message: "categoria adicionada com sucesso!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Error while register new category" },
      { status: 501 }
    );
  }
}
