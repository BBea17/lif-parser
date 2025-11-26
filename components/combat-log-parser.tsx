"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { CombatStats } from "@/components/combat-stats"
import { CombatEventsList } from "@/components/combat-events-list"

export interface CombatEvent {
  id: string
  timestamp: string
  attacker: string
  target: string
  damage: number
  damageType: "slashing" | "blunt" | "piercing" | "siege" | "fire" | "poison"
  isKill: boolean
}

export interface PlayerStats {
  characterName: string
  kills: number
  deaths: number
  damageDealt: number
  damageTaken: number
  totalHits: number
  totalHitsTaken: number
}

export function CombatLogParser() {
  const [logFile, setLogFile] = useState<File | null>(null)
  const [playerStats, setPlayerStats] = useState<PlayerStats | null>(null)
  const [combatEvents, setCombatEvents] = useState<CombatEvent[]>([])
  const [isProcessing, setIsProcessing] = useState(false)

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setLogFile(file)
      // Aquí llamarías a tu lógica de parseo
      processLogFile(file)
    }
  }

  const processLogFile = async (file: File) => {
    setIsProcessing(true)

    // Simulación de datos - reemplaza con tu lógica real
    setTimeout(() => {
      setPlayerStats({
        characterName: "Sir Aldric",
        kills: 12,
        deaths: 3,
        damageDealt: 4580,
        damageTaken: 1240,
        totalHits: 89,
        totalHitsTaken: 34,
      })

      setCombatEvents([
        {
          id: "1",
          timestamp: "14:32:15",
          attacker: "Sir Aldric",
          target: "Ragnar Bloodaxe",
          damage: 145,
          damageType: "slashing",
          isKill: false,
        },
        {
          id: "2",
          timestamp: "14:32:18",
          attacker: "Ragnar Bloodaxe",
          target: "Sir Aldric",
          damage: 89,
          damageType: "blunt",
          isKill: false,
        },
        {
          id: "3",
          timestamp: "14:32:22",
          attacker: "Sir Aldric",
          target: "Ragnar Bloodaxe",
          damage: 203,
          damageType: "slashing",
          isKill: true,
        },
        {
          id: "4",
          timestamp: "14:35:40",
          attacker: "Sir Aldric",
          target: "Lady Morgana",
          damage: 98,
          damageType: "piercing",
          isKill: false,
        },
        {
          id: "5",
          timestamp: "14:35:45",
          attacker: "Sir Aldric",
          target: "Lady Morgana",
          damage: 167,
          damageType: "slashing",
          isKill: true,
        },
      ])

      setIsProcessing(false)
    }, 1500)
  }

  return (
    <div className="container mx-auto p-4 md:p-8 max-w-7xl">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl text-foreground mb-2 font-extralight opacity-100">Chronicle of Battledasjhdasj</h1>
        <p className="text-lg text-muted-foreground">Life is Feudal: Arden - Registro de Combate</p>
      </header>

      {!logFile && (
        <Card className="border-2 border-border p-8 mb-8 text-center bg-card">
          <div className="flex flex-col items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Cargar Archivo de Combate</h2>
              <p className="text-base text-muted-foreground max-w-md mx-auto">
                Selecciona tu archivo de logs (.log) para analizar
              </p>
            </div>

            <label htmlFor="file-upload">
              <Button size="lg" className="cursor-pointer" asChild>
                <span>
                  <Upload className="w-5 h-5 mr-2" />
                  Seleccionar Archivo
                </span>
              </Button>
            </label>
            <input id="file-upload" type="file" accept=".log,.txt" onChange={handleFileUpload} className="hidden" />
          </div>
        </Card>
      )}

      {isProcessing && (
        <Card className="border-2 border-border p-12 mb-8 text-center bg-card">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full border-4 border-primary border-t-accent animate-spin" />
            <p className="text-xl font-bold text-foreground">Procesando...</p>
          </div>
        </Card>
      )}

      {/* Stats and Events */}
      {playerStats && combatEvents.length > 0 && !isProcessing && (
        <div className="space-y-6">
          <CombatStats stats={playerStats} />
          <CombatEventsList events={combatEvents} />

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              variant="outline"
              onClick={() => {
                setLogFile(null)
                setPlayerStats(null)
                setCombatEvents([])
              }}
            >
              Cargar Nuevo Archivo
            </Button>
            <Button
              onClick={() => {
                console.log("Exportar datos")
              }}
            >
              Exportar Resultados
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
