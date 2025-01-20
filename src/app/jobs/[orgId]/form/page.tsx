import { useRouter } from "next/router";
import React from "react";

type Props = { params: { orgId: string } };

export default function Page({ params }: Props) {
    return <div>SERVICE FORM: for org ID - {params.orgId}</div>;
}
