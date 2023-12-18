import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { tokens } from '../../theme'
import Header from '../../components/Header'
import { ExpandMore } from '@mui/icons-material'

const Faq = () => {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ExpandMore />} >
          <Typography color={colors.greenAccent[500]} variant='h5'>
            An Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est necessitatibus pariatur inventore quam quae quidem totam quisquam error vitae corrupti!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} >
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Another Important question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est necessitatibus pariatur inventore quam quae quidem totam quisquam error vitae corrupti!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} >
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Your Favorite Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est necessitatibus pariatur inventore quam quae quidem totam quisquam error vitae corrupti!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} >
          <Typography color={colors.greenAccent[500]} variant='h5'>
            Some Random Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est necessitatibus pariatur inventore quam quae quidem totam quisquam error vitae corrupti!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMore />} >
          <Typography color={colors.greenAccent[500]} variant='h5'>
            The Final Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Est necessitatibus pariatur inventore quam quae quidem totam quisquam error vitae corrupti!
          </Typography>
        </AccordionDetails>
      </Accordion>

    </Box>
  )
}

export default Faq