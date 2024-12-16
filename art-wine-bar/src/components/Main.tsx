"use client"

import React from 'react'
import Link from 'next/link'
import { MapPin, ExternalLink } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const Main = () => {
  return (
    <main className="container mx-auto p-4 space-y-8">
      <section id="about" className="space-y-4">
        <h2 className="text-3xl font-bold">コンペ中止</h2>
        <p className="text-xl font-semibold text-red-600">アートワインバーコンペは中止となりましたので、募集を停止いたします。</p>
        <Card>
          <CardHeader>
            <CardTitle>お知らせ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>コンペティションの中止に伴い、全ての関連イベントも中止となります。ご理解とご協力をお願いいたします。</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">お問い合わせ</h2>
        <Card>
          <CardHeader>
            <CardTitle>ご質問がある方へ</CardTitle>
          </CardHeader>
          <CardContent>
            <p>コンペティションの中止に関するご質問は、以下のメールアドレスまでお問い合わせください。</p>
            <p className="font-semibold mt-2">awb.nagoya.compe@gmail.com</p>
          </CardContent>
        </Card>
      </section>

      <section id="access" className="space-y-4">
        <h2 className="text-3xl font-bold">アクセス</h2>
        <p className="text-lg">アートワインバー名古屋へのアクセス情報は以下の通りです。</p>
        <Card>
          <CardHeader>
            <CardTitle>アートワインバー名古屋</CardTitle>
          </CardHeader>
          <CardContent>
            <p><MapPin className="inline mr-2" />〒460-0008 愛知県名古屋市中区栄3丁目15-27 いちご栄ビル 1F</p>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

export default Main

