import { Card } from "@/components/ui/card"
import { Swords, Skull, Target, TrendingUp, TrendingDown, Heart } from "lucide-react"
import type { PlayerStats } from "./combat-log-parser"

interface CombatStatsProps {
  stats: PlayerStats
}

export function CombatStats({ stats }: CombatStatsProps) {
  const kdRatio = stats.deaths > 0 ? (stats.kills / stats.deaths).toFixed(2) : stats.kills.toFixed(2)
  const avgDamagePerHit = stats.totalHits > 0 ? (stats.damageDealt / stats.totalHits).toFixed(1) : "0"
  const avgDamageTakenPerHit = stats.totalHitsTaken > 0 ? (stats.damageTaken / stats.totalHitsTaken).toFixed(1) : "0"

  return (
    <div className="space-y-4">
      <Card className="border-2 border-border p-6 bg-primary/10">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground">{stats.characterName}</h2>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Kills */}
        <Card className="border-2 border-border p-4 bg-card">
          <div className="flex flex-col items-center gap-2 text-center">
            <Swords className="w-6 h-6 text-accent" />
            <p className="text-3xl font-bold text-accent">{stats.kills}</p>
            <p className="text-xs text-muted-foreground uppercase">Bajas</p>
          </div>
        </Card>

        {/* Deaths */}
        <Card className="border-2 border-border p-4 bg-card">
          <div className="flex flex-col items-center gap-2 text-center">
            <Skull className="w-6 h-6 text-destructive" />
            <p className="text-3xl font-bold text-destructive">{stats.deaths}</p>
            <p className="text-xs text-muted-foreground uppercase">Caídas</p>
          </div>
        </Card>

        {/* K/D Ratio */}
        <Card className="border-2 border-border p-4 bg-card">
          <div className="flex flex-col items-center gap-2 text-center">
            <Target className="w-6 h-6 text-primary" />
            <p className="text-3xl font-bold text-foreground">{kdRatio}</p>
            <p className="text-xs text-muted-foreground uppercase">K/D</p>
          </div>
        </Card>

        {/* Damage Dealt */}
        <Card className="border-2 border-border p-4 bg-card">
          <div className="flex flex-col items-center gap-2 text-center">
            <TrendingUp className="w-6 h-6 text-chart-4" />
            <p className="text-2xl font-bold text-chart-4">{stats.damageDealt}</p>
            <p className="text-xs text-muted-foreground uppercase">Infligido</p>
            <p className="text-xs text-muted-foreground">(~{avgDamagePerHit}/hit)</p>
          </div>
        </Card>

        {/* Damage Taken */}
        <Card className="border-2 border-border p-4 bg-card">
          <div className="flex flex-col items-center gap-2 text-center">
            <TrendingDown className="w-6 h-6 text-chart-1" />
            <p className="text-2xl font-bold text-chart-1">{stats.damageTaken}</p>
            <p className="text-xs text-muted-foreground uppercase">Recibido</p>
            <p className="text-xs text-muted-foreground">(~{avgDamageTakenPerHit}/hit)</p>
          </div>
        </Card>

        {/* Total Hits */}
        <Card className="border-2 border-border p-4 bg-card">
          <div className="flex flex-col items-center gap-2 text-center">
            <Heart className="w-6 h-6 text-foreground" />
            <p className="text-2xl font-bold text-foreground">{stats.totalHits}</p>
            <p className="text-xs text-muted-foreground uppercase">Golpes</p>
            <p className="text-xs text-muted-foreground">({stats.totalHitsTaken} recib.)</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
