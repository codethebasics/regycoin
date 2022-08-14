import { Box, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Card from '../../components/card/Card'

export default function index() {
  return (
    <Box>
      <Tabs isFitted colorScheme='black'>
        <TabList>
          <Tab>Moedas</Tab>
          <Tab>Placas</Tab>
          <Tab>Minas</Tab>
          <Tab>Recursos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel display='flex' flexWrap='wrap'>
            <Card
              image='/img/duckcoin_1.png'
              alt='duckcoin'
              balance={7.5}
              symbol={'DUCK'}
            />
            <Card
              image='/img/regycoin.png'
              alt='duckcoin'
              balance={10}
              symbol={'REGY'}
            />
          </TabPanel>
          <TabPanel display='flex' flexWrap='wrap'>
            <Card
              image='/img/placaon_comum.gif'
              alt='comum'
              balance={1}
              symbol={'COMUM'}
            />
            <Card
              image='/img/placaon_classic.gif'
              alt='classic'
              balance={1}
              symbol={'CLASSIC'}
            />
            <Card
              image='/img/placaon_rara.gif'
              alt='rara'
              balance={1}
              symbol={'RARA'}
            />
            <Card
              image='/img/placaon_epica.gif'
              alt='epica'
              balance={1}
              symbol={'EPICA'}
            />
            <Card
              image='/img/placaon_legendary.gif'
              alt='legendary'
              balance={1}
              symbol={'LEGEND'}
            />
          </TabPanel>
          <TabPanel display='flex' flexWrap='wrap'>
            <Card
              image='/img/mina_areia.png'
              alt='mina areia'
              balance={1}
              symbol={'AREIA'}
            />
            <Card
              image='/img/mina_boro.png'
              alt='mina boro'
              balance={1}
              symbol={'BORO'}
            />
            <Card
              image='/img/mina_carvao.png'
              alt='mina carvao'
              balance={1}
              symbol={'CARVAO'}
            />
            <Card
              image='/img/mina_ferro.png'
              alt='mina ferro'
              balance={1}
              symbol={'FERRO'}
            />
            <Card
              image='/img/mina_fosforo.png'
              alt='mina fosforo'
              balance={1}
              symbol={'FOSFORO'}
            />
            <Card
              image='/img/mina_ouro.png'
              alt='mina ouro'
              balance={1}
              symbol={'OURO'}
            />
          </TabPanel>
          <TabPanel display='flex' flexWrap='wrap'>
            <Card
              image='/img/sand_minerals_icon.png'
              alt='areia'
              balance={1}
              symbol={'SAND'}
            />
            <Card
              image='/img/coal_minerals_icon.png'
              alt='areia'
              balance={1}
              symbol={'COAL'}
            />
            <Card
              image='/img/iron_minerals_icon.png'
              alt='iron'
              balance={1}
              symbol={'IRON'}
            />
            <Card
              image='/img/gold_minerals_icon.png'
              alt='areia'
              balance={1}
              symbol={'GOLD'}
            />
            <Card
              image='/img/phosphorous_minerals_icon.png'
              alt='areia'
              balance={1}
              symbol={'PHOSPOROUS'}
            />
            <Card
              image='/img/uranium_minerals_icon.png'
              alt='areia'
              balance={1}
              symbol={'URANIUM'}
            />
            <Card
              image='/img/boron_minerals_icon.png'
              alt='areia'
              balance={1}
              symbol={'BORON'}
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}
