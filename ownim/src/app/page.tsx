"use client";
import { HomeScreenContent } from '../components/utils/ScreensContent';
import Cards from '../components/utils/Cards';
import { ProductCards, ServicesCards } from '../components/constants/CardsData';
import '../styles/AboutScreen.css'; // Add a CSS file for styling
import Footer from '../components/utils/Footer'
import '../styles/HomeScreen.css';
import Image from 'next/image';
import bg2 from '../../public/homeScreen/bg2.png'
import topic from '../../public/homeScreen/topPic.png'
import teamwork from '../../public/homeScreen/teamwork.png'
import { useRouter } from 'next/navigation';
import NextJsCarousel from '@/components/utils/Carousal';
import {BackgroundGradientAnimationDemo} from '@/components/utils/Animation';
import {useIsMobile} from '@/components/utils/DevicePlatform';
import useWindowSize from '@/components/utils/WindowSize';

export default function Page() {
 const navigation = useRouter();
 const isMobile = useIsMobile();
 const windowWidth =useWindowSize().width;
  return (
    <>
    <div>
    <NextJsCarousel/>
      <div style={{alignItems:'center', width:'auto', margin:20,justifyContent:'center', padding:20, fontWeight:'bold'}}>
      <h1 className="main-heading"style={{justifySelf:'center', fontSize:20,color:'navy'}} >{HomeScreenContent.mainHeading}</h1>
      </div>
      
      {!isMobile && <Image src={'/card-bg.png'} style={{height:100, width:100, marginTop:30}} alt='card-bg1' width={50} height={50}  />}
      <Image
        src={topic}
        alt="Top Pic"
        className="top-image"
        sizes="100vw"
        style={{ width:isMobile?'99%' : '60%',  height: isMobile?300:500, justifySelf:'center' }}
      />
      {!isMobile && <Image src={'/card-bg2.png'} style={{height:100, width:100, marginTop:0, justifySelf:'flex-end'}} alt='card-bg1' width={50} height={50}  />}

      <section className="text-section">
        <h2 style={{fontWeight:'bold', color:'#e91e63', alignSelf:'center', paddingTop:50,}}>{HomeScreenContent.firstSubHeading}</h2>
        <p style={{width:isMobile?'100%' : 600, justifySelf:'center', paddingBottom:50, color:'black' }} >{HomeScreenContent.firstParagraph}</p>
      </section>

      
      <div style={{display:'flex', flexDirection:'column', backgroundColor:'lightpink'}} >
      <div  className="grid-images" style={{padding:30, width:'100%'}} >
          {[...Array(4).keys()].map((index) => (
            <div key={index} style={{paddingLeft:10,paddingRight:10}} > 
          <Image
            key={index}
            src={`/homeScreen/image${index + 1}.png`}
            alt={`Grid ${index + 1}`}
            className="grid-image"
            width={200}
            height={50}
            style={{padding:isMobile?2:30, borderWidth:5, borderColor:'#e91e63' }}
          />
          </div>
        ))}
        </div>

        <div  className="grid-images" style={{padding:30, width:'100%'}} >
          {[...Array(4).keys()].map((index) => (
            <div key={index} style={{paddingLeft:10,paddingRight:10}} > 
          <Image
            key={index}
            src={`/homeScreen/image${index + 1+ 4}.png`}
            alt={`Grid ${index + 1}`}
            className="grid-image"
            width={200}
            height={50}
            style={{padding:isMobile?2:30,borderWidth:5, borderColor:'#e91e63' }}
          />
          </div>
        ))}
        </div>

        <div  className="grid-images" style={{padding:30, width:'100%'}} >
          {[...Array(4).keys()].map((index) => (
            <div key={index} style={{paddingLeft:10,paddingRight:10}} > 
          <Image
            key={index}
            src={`/homeScreen/image${index + 1+ 8 }.png`}
            alt={`Grid ${index + 1}`}
            className="grid-image"
            width={200}
            height={50}
            style={{padding:isMobile?2:30,borderWidth:5, borderColor:'#e91e63'}}
          />
          </div>
        ))}
        </div>

        </div>
    
      <div style={{display:'flex', justifyContent:'space-around', flexDirection:'column', marginBottom:isMobile?30:20, marginTop:20, width:isMobile?'100%': '30%', height:'2%' , justifySelf:'center' }}>
        <div style={{alignSelf:'center'}} >
        <button  className='circle2' onClick={() => navigation.push('/services/leather')}  style={{ borderWidth:5,borderColor:'#e91e63'}} >
          {HomeScreenContent.leather}
        </button>
        </div>
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between' }}>
        <button className='circle2' onClick={() => navigation.push('/services/stainless')}  style={{ borderWidth:5,borderColor:'#e91e63'}} >
          {HomeScreenContent.stainlessSteel}
        </button>
        <button className='circle2' onClick={() => navigation.push('/services/jenitorials')}  style={{ borderWidth:5,borderColor:'#e91e63'}} >
          {HomeScreenContent.jenitorials}
        </button>
        </div>
      </div>

      <div className={ isMobile ?"cards-section-mobile" : "cards-section"}>
        {ProductCards.map((item, indx) => (
          <Cards
            key={indx}
            name={item.name}
            image={item.image}
            desc={item.desc}
            url={item.url}
            borderColor='#e91e63'
          />
        ))}
      </div>
      <div style={{marginTop:50, width:'100%'}} ><BackgroundGradientAnimationDemo/></div>
       
      <section className="text-section">
        <h2 style={{color:'navy', fontWeight:'bold', alignSelf:'center', paddingTop:50, }} >{HomeScreenContent.secondSubHeading}</h2>
        <p style={{justifySelf:'center', width:'100%', paddingBottom:30, color:'black'}} >{HomeScreenContent.secondParagraph}</p>
      </section>
      
      <div style={{justifyContent:'center', width:'100%', height:isMobile?420:600,paddingTop:isMobile?20:80, backgroundColor:'lightblue' }} >
      <Image
        src={bg2}
        alt="Background"
        className="background-image"
        style={{justifySelf:'center', marginTop:30,borderWidth:5,borderColor:'navy'}}
      />
      </div>
      
      <div style={{display:'flex', justifyContent:'space-around', flexDirection:'column', height:500, width:isMobile?'100%':'40%', justifySelf:'center' }}>
       
        <div style={{alignSelf:'center',marginTop:30, paddingTop:20}} >
        <button className='circle'  onClick={() => navigation.push('/services/gravure')} style={{ borderWidth:5,borderColor:'navy'}} >
          {HomeScreenContent.gravure}
        </button>
        </div>
        
        <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:isMobile?'space-between': 'space-around', paddingTop:isMobile?0:5 }} >
        <button className='circle' onClick={() => navigation.push('/services/flexo')}   style={{ borderWidth:5,borderColor:'navy'}} >
          {HomeScreenContent.flexo}
        </button>
        <button className='circle' onClick={() => navigation.push('/services/logistics')}  style={{ borderWidth:5,borderColor:'navy'}} >
        {HomeScreenContent.logistics}
        </button>
         </div>

        <div style={{display:'flex', flexDirection:'row', justifySelf:'center', alignSelf:'center', justifyContent:'space-between', alignItems:'right' ,marginBottom:30, width:isMobile?'68%': '45%', paddingTop:50 }} >
        <button className='circle' onClick={() => navigation.push('/services/Offset')}  style={{ borderWidth:5,borderColor:'navy'}} >
          {HomeScreenContent.offset}
        </button>
        <button className='circle' onClick={() => navigation.push('/services/software')} style={{ borderWidth:5,borderColor:'navy'}}  >
          {HomeScreenContent.software}
        </button>
      </div>

      </div>


      <div className={ isMobile ?"cards-section-mobile" : "cards-section"}>
        {ServicesCards.map((item, indx) => (
          <Cards
            key={indx}
            name={item.name}
            image={item.image}
            desc={item.desc}
            url={item.url}
            borderColor='navy'
          />
        ))}
      </div>

      <div className="footer-section" style={{display:'flex',backgroundColor:'#f5f5f5', fontSize:18, flexDirection:isMobile?'column':'row', marginTop:30, marginBottom:30, width:'100%'}} >
        <div style={{width:isMobile?'100%':'70%'}} >
        <h2 style={{fontWeight:'bold', paddingLeft:isMobile?5:30, color:'black', paddingTop:20 }} >
          {HomeScreenContent.thirdSubHeading}
        </h2>
        <p style={{justifyContent:'left', paddingLeft:isMobile?5:30,paddingRight:isMobile?5:20, color:'black' }} >{HomeScreenContent.thirdParagraph}</p>
        </div>
{   <Image
        src={teamwork}
        alt="Teamwork"
        className="teamwork-image"
        width={isMobile?windowWidth: 700}
        height={ 680}
        style={{paddingTop:isMobile?20:0}}
        
      />}
      </div>
      </div>
      <div>
      <Footer />
      </div>
    </>
  );
}




