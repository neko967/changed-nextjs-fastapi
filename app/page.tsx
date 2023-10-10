import Image from "next/image";
import Link from "next/link";
import { sql } from "@vercel/postgres";

export default async function Cart({
  params
} : {
  params: { user: string }
}): Promise<JSX.Element> {

  return (
    <div>
      testtext
    </div>
  );
}