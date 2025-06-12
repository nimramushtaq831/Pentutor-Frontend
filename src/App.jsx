"use client"
import { useState } from "react"
import TeamsHome from "./assets/teams-home"
import TeamsCalendar from "./assets/team-membering"
import TeamChat from "./assets/team-chat"
import Scheduler from "./assets/schedule"

export default function Page() {
  const [currentPage, setCurrentPage] = useState("home")

  switch (currentPage) {
    case "meetings":
      return <TeamsCalendar onNavigate={setCurrentPage} />
    case "teamchat":
      return <TeamChat onNavigate={setCurrentPage} />
    case "scheduler":
      return <Scheduler onNavigate={setCurrentPage} />
    default:
      return <TeamsHome onNavigate={setCurrentPage} />
  }
}
