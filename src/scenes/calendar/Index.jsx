import { formatDate } from '@fullcalendar/core'
import { Box, List, ListItem, ListItemText, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import Header from "../../components/Header"
import { tokens } from '../../theme'
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";const Index = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const [currentEvents, setcurrentEvents] = useState([])
  const handleDateClick = (selected) => {
    const title = prompt("Plaease enter a new title for tour event")
    const calendarApi = selected.view.calendar;
    calendarApi.unselect()

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      })
    }
  }
  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove()
    }
  }

  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interative Page" />
      <Box display="flex" justifyContent="space-between">
        <Box flex="1 1 20%" backgroundColor={colors.primary[400]} p="15px" borderRadius="4px">
          <Typography variant='h5'>Events</Typography>
          <List>
            {currentEvents.map((events) => (
              <ListItem key={events.id} sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "2px" }} >
                <ListItemText primary={events.title} secondary={<Typography>{formatDate(events.start, {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}</Typography>} >

                </ListItemText>
              </ListItem>
            ))}
          </List>
            </Box>
          <Box flex="1 1 80%" ml="15px" >
            <FullCalendar height="75vh" plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
              headerToolbar={{ left: "prev,next,today", center: "title", right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth" }}
              initialView='dayGridMonth' editable={true} selectable={true} selectMirror={true} dayMaxEvents={true} select={handleDateClick}
              eventClick={handleEventClick} eventsSet={(events) => setcurrentEvents(events)} 
              initialEvents={[
                {id:"1234", title:"All-day events", date: "2023-12-15"},
                {id:"4321", title:"Timed event", date: "2023-12-30"}
              ]} />
          </Box>
      </Box>
    </Box>
  )
}

export default Index