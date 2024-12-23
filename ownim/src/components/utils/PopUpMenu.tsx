import {Button, Menu, MenuItem, MenuTrigger, Popover} from 'react-aria-components';
import "../../styles/Menue.css"
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';


const FadeMenu   = () =>{
const currentPath = usePathname();
const router = useRouter();
return(
<MenuTrigger  >
  <Button aria-label="Menu"><p style={{color:currentPath.includes("/services") ? "#e91e63":"black"}} >Services</p></Button>
  <Popover style={{maxHeight:'inherit', boxSizing:'border-box', overflow:'auto',padding:2, minWidth:150, outline:'none', zIndex:1, backgroundColor:'white' }} >
    <Menu>
      <MenuItem onAction={() => router.push('/services/jenitorials') } > <Link href={"#"}>Jenitorials</Link> </MenuItem>
      <MenuItem onAction={() => router.push('/services/leather')}><Link href={"#"}>Leather</Link></MenuItem>
      <MenuItem onAction={() => router.push('/services/stainless')}><Link href={"#"}>Stainless Steel</Link></MenuItem>
      <MenuItem onAction={() => router.push('/services/flexo')}><Link href={"#"}>Flexo Printing</Link></MenuItem>
      <MenuItem onAction={() => router.push('/services/gravure')}><Link href={"#"}>Gravure Printing</Link></MenuItem>
      <MenuItem onAction={() => router.push('/services/offset')}><Link href={"#"}>Offset Printing</Link></MenuItem>
      <MenuItem onAction={() => router.push('/services/logistics')}><Link href={"#"}>Logistics</Link></MenuItem>
      <MenuItem onAction={() => router.push('/services/software')}><Link href={"#"}>Software & Digital Marketing</Link></MenuItem>
    </Menu>
  </Popover>
</MenuTrigger>
)
}
export default FadeMenu;