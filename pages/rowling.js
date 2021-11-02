import Head from 'next/head'
import Image from 'next/image'
import swr from '../lib/swr.js'
import Link from 'next/link'

const Rowling = () => {
    return <>
        <h1 className="text-4xl text-white mb-1">J.K. Rowling</h1>
        <p className="text-lg opacity-75">Dünyaca ünlü İngiliz yazarlarından olan J.K. Rowling 31 Temmuz 1965 yılında İngiltere’de doğmuştur. Wyedean Comprehensive’de lise eğitimini tamamlamıştır. Exeter Üniversitesinde Fransızca ve Klasik Edebiyatları okuduktan sonra Londra’ya yerleşmiştir.</p>
    
<p className="text-lg opacity-75">Daha sonra Portekiz’e taşınan yazar İngilizce öğretmenliği yapmaya başlamıştır. 1992 yılında Portekizli gazeteci Jorge Arantes ile evlenmiş ve bu birliktelikten bir kız çocuğu olmuştur. 1995 yılında evliliğini sonlandırmıştır.</p>

<p className="text-lg opacity-75">2001 yılında Neil Murray adında bir doktorla evlenen J.K. Rowling’in iki çocuğu daha olmuştur. Böylece hayalini kurduğu üç çocuk yapma arzusunu gerçekleştirmiştir.</p>

<p className="text-lg opacity-75">Asıl adı Joanne Kathleen Rowling olan yazarın isminin kısaltmasının nedeni kitabın yayımcısının isteği üzerinedir. Çünkü bu kitabı yazanın bir bayan olması nedeniyle okuyucuların kitaba ilgi duymak istemeyecekleri sanılmıştır.</p>

<p className="text-lg opacity-75">Yazar ilk eserini 6 yaşındayken yazmıştır. Bu kitabının adı Tavşan adlı hikayesidir. Ona asıl ününü getiren eseri ise Harry Potter serisi olmuştur. </p>

<p className="text-lg opacity-75">Aklında sürekli bir büyücülük okulunda okuyan çocuğun hikayesi olmuştur. Manchester Londra tren yolculuğu esnasında Harry Potter’ın ilk kitabı olan Felsefe Taşının temel hikayesini oluşturmuş ve bu hikayeyi kağıda dökmüştür.</p>

<p className="text-lg opacity-75">Bu kitabı bir Çin lokantası olan Nicolson’s Cafe’de tamamlamıştır. Yayınlandığı andan itibaren tüm dünyada büyük ses getiren Harry Potter serisi 400 milyon kopya satmıştır. Böylelikle J.K. Rowling büyük bir üne kavuşmuştur. </p>

<p className="text-lg opacity-75">Sadece çocukların değil aynı zamanda yetişkinlerin de engin hayal dünyasına seslenen bu eser büyük bir ilgiyle okunmuştur. Kısa zamanda çok satanlar listesinin en başına yükselmeyi başarmıştır.</p>
    
    </>
}

export default Rowling;
