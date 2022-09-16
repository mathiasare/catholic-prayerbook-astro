import {Root ,Item, Content, Trigger, Header} from '@radix-ui/react-accordion'
import { ChevronDownIcon } from '@radix-ui/react-icons';
import s from '@styles/Accordion.module.css'
import type { FC } from 'react';

interface AccordionProps {
    content: { [index: string]: string[]  }
  }

export const Accordion: React.FC<AccordionProps> = (props) => {
    const { content } = props;
    const menuItems = Object.keys(content).map((category) => {
          const contents = content[category].map((prayer) => {
            const path = `${category}/${prayer}/`
            return <li key={prayer}><a href={path} className="hover:text-red-800 hover:font-bold">{prayer}</a></li>
          });
          return (
            <Item value={category} className={s.Item} key={category}>
              <Header className={s.Header}>
                <Trigger className={s.Trigger}>
                  <span>{category}</span>
                  <ChevronDownIcon aria-hidden className={s.Icon} />
                </Trigger>
              </Header>
              <Content className={s.Content}>
                <ul>
                  {contents}
                </ul>
              </Content>
            </Item>
          )
    })
    return (
        <>
        <Root type="multiple" className={s.Container}>
          <Item>
            <Header className={s.Title}>
                Pealkiri
            </Header>
          </Item>
          {menuItems}
        </Root>
      </>
  );}