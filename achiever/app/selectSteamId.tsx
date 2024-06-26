"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SelectSteamId() {
    let [steamId, setSteamId] = useState<string>();
    return (
        <div>
            <input type="text" onChange={(v) => setSteamId(v.target.value)} />
            <Link href={`/${steamId}`}>
                Go
            </Link>
        </div>
    );
}
