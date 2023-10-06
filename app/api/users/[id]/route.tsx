import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import {prisma} from "@/prisma/client";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string} }
) {

  const user = await prisma.user.findUnique({
   
    where: { id : parseInt(params.id) }
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(user);
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string} }
) {
  //Validate the request body
  const body = await request.json();

  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

  //If invalid,return 400
  //Fetch the suer with the given id
  //if doesn't exist,return 404

const user = await prisma.user.findUnique({
  where:{id: parseInt(params.id)}
})

if(!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  //Update the user
  //Return the updated user

const updatedUser = await prisma.user.update({
    where:{id: user.id},
    data:{
      name: body.name,
      email:body.email
    }
  })

  return NextResponse.json(updatedUser);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {

 const user = await prisma.user.findUnique({
    where:{id: parseInt(params.id)}
  })

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  await  prisma.user.delete({
      where: {id: parseInt(params.id)}
    })

  return NextResponse.json({});

  //Fetch user from db
  //If not found ,return 404
  //Delete the user
  //Return 200
}
