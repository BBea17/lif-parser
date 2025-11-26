import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sword, Skull, Clock } from "lucide-react"
import type { CombatEvent } from "./combat-log-parser"

interface CombatEventsListProps {
  events: CombatEvent[]
}

const damageTypeColors = {
  slashing: "bg-accent text-accent-foreground",
  blunt: "bg-secondary text-secondary-foreground",
  piercing: "bg-chart-3 text-primary-foreground",
  siege: "bg-chart-2 text-primary-foreground",
  fire: "bg-destructive text-destructive-foreground",
  poison: "bg-chart-5 text-primary-foreground",
}

const damageTypeLabels = {
  slashing: "Corte",
  blunt: "Contundente",
  piercing: "Perforación",
  siege: "Asedio",
  fire: "Fuego",
  poison: "Veneno",
}

export function CombatEventsList({ events }: CombatEventsListProps) {
  return (
    <Card className="border-2 border-border bg-card">
      <div className="p-4 md:p-6 border-b-2 border-border bg-primary/10">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">Eventos de Combate</h3>
        <p className="text-sm text-muted-foreground mt-1">{events.length} eventos</p>
      </div>

      <ScrollArea className="h-[600px]">
        <div className="p-4 md:p-6 space-y-3">
          {events.map((event) => (
            <Card
              key={event.id}
              className={`p-4 border-l-4 ${
                event.isKill ? "border-l-accent bg-accent/5" : "border-l-primary/50 bg-card/50"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                {/* Timestamp */}
                <div className="flex items-center gap-2 text-muted-foreground min-w-[100px]">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm font-mono">{event.timestamp}</span>
                </div>

                {/* Event Description */}
                <div className="flex-1 flex flex-wrap items-center gap-2 text-base">
                  <span className="font-bold text-accent">{event.attacker}</span>
                  <Sword className="w-4 h-4 text-muted-foreground" />
                  <span className="font-bold text-foreground">{event.target}</span>

                  {/* Damage Badge */}
                  <Badge variant="outline" className="font-bold">
                    {event.damage} HP
                  </Badge>

                  {/* Damage Type Badge */}
                  <Badge className={`${damageTypeColors[event.damageType]}`}>
                    {damageTypeLabels[event.damageType]}
                  </Badge>

                  {/* Kill Badge */}
                  {event.isKill && (
                    <Badge className="bg-accent text-accent-foreground">
                      <Skull className="w-3 h-3 mr-1" />
                      BAJA
                    </Badge>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  )
}
