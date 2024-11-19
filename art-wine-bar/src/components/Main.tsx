"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MapPin, Clock, Calendar, ExternalLink } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Main = () => {
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const targetDate = new Date('2025-01-31T23:59:59').getTime()
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setCountdown(`${days}日 ${hours}時間 ${minutes}分 ${seconds}秒`)
    }

    const timer = setInterval(updateCountdown, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <main className="container mx-auto p-4 space-y-8">
      <section id="about" className="space-y-4">
        <h2 className="text-3xl font-bold">コンペ概要</h2>
        <p>アートワインバー名古屋デザインコンペティション2024</p>
        <p>テーマ：「アートとワインで楽しむ豊かな空間」</p>
        <Card>
          <CardHeader>
            <CardTitle>締め切り</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{countdown}</p>
          </CardContent>
        </Card>
        <div className="flex space-x-4">
          <Button asChild>
            <Link href="/competition-details.pdf" target="_blank">コンペ要項PDF</Link>
          </Button>
          <Button asChild>
            <Link href="/poster.pdf" target="_blank">フライヤー</Link>
          </Button>
        </div>
      </section>

      <section id="entry" className="space-y-4">
      <h2 className="text-3xl font-bold">参加申し込み</h2>
        <Card>
          <CardHeader>
            <CardTitle>コンペ申し込みフォーム</CardTitle>
          </CardHeader>
          <CardContent>
            <p>以下のリンクから申し込みフォームにアクセスしてください。</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="https://forms.gle/A5xJTuwavyFEDb7X6" target="_blank" rel="noopener noreferrer">
                申し込みフォームへ <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">ブラッシュアップイベント</h2>
        <Card>
          <CardHeader>
            <CardTitle className="pb">
              <p className="pb-1">アートワインバーって実際どんな場所？</p> <br />
              <p>アートワインバー現社長が30人限定のアートセッションを開催！</p>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p><Calendar className="inline mr-2" />2024年12月21日</p>
            <p><Clock className="inline mr-2" />セッション①: 11:00 - 13:00</p>
            <p><Clock className="inline mr-2" />セッション②: 14:30 - 16:30</p>
            <p><Clock className="inline mr-2" />セッション③: 18:00 - 20:00</p>
            <p><MapPin className="inline mr-2" />アートワインバー名古屋</p>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href="https://forms.gle/HNAHSb6i2vw83cDDA" target="_blank" rel="noopener noreferrer">
                ブラッシュアップイベント申し込み <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">審査委員</h2>
        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <CardTitle>武藤 隆</CardTitle>
            </CardHeader>
            <CardContent>
              <p>大同大学 教授</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>諸江 一紀</CardTitle>
            </CardHeader>
          <CardContent>
            <p>愛知淑徳大学 教授</p>
          </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>吉元 学</CardTitle>
            </CardHeader>
            <CardContent>
              <p>愛知淑徳大学 教授</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>建築系企業様</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section id="access" className="space-y-4">
        <h2 className="text-3xl font-bold">アクセス</h2>
        <p className="text-lg font-semibold text-red-600">公共交通機関のご利用をお願いします</p>
      </section>
    </main>
  )
}

export default Main