"use client"

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MapPin, Clock, Calendar } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const Main = () => {
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59').getTime()
    
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
        <p>テーマ：「芸術とワインの融合」</p>
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
            <Link href="/competition-flyer.jpg" target="_blank">フライヤー</Link>
          </Button>
        </div>
      </section>

      <section id="entry" className="space-y-4">
        <h2 className="text-3xl font-bold">参加フォーム</h2>
        <form className="space-y-4">
          <Input type="text" placeholder="お名前" required />
          <Input type="email" placeholder="メールアドレス" required />
          <Textarea placeholder="作品コンセプト" required />
          <Button type="submit">送信</Button>
        </form>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">ブラッシュアップイベント</h2>
        <Card>
          <CardHeader>
            <CardTitle>アーティストによる作品相談会</CardTitle>
          </CardHeader>
          <CardContent>
            <p><Calendar className="inline mr-2" />2024年X月X日</p>
            <p><Clock className="inline mr-2" />14:00 - 16:00</p>
            <p><MapPin className="inline mr-2" />アートワインバー名古屋</p>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="text-3xl font-bold">審査委員</h2>
        <p>近日公開</p>
      </section>

      <section id="access" className="space-y-4">
        <h2 className="text-3xl font-bold">アクセス</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>アートワインバー名古屋</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>車でのアクセス：</strong>〇〇インターから約10分</p>
              <p><strong>公共交通機関：</strong>〇〇駅から徒歩5分</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>TONKAN名古屋</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>車でのアクセス：</strong>〇〇インターから約15分</p>
              <p><strong>公共交通機関：</strong>〇〇駅から徒歩8分</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  )
}

export default Main