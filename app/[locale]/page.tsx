'use client';
 
import {useTranslations} from 'next-intl';
import { Card } from '../components/Card';
 
export default function Index() {
 
  const t = useTranslations('Index');
  return(
    <div>
       <Card />
    </div>
  )
}