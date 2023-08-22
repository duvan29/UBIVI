import style from './Nav.module.css'


 const Nav = () => {
   return (     
      <>
         <nav className={style.nav}>
               <div className={style.logo}>
               AQUI VA EL LOGO
               </div>
               <div>
                  <div className={style.items}>
                     <div className={style.linkMenu}>
                        <div className={style.itemsDiv}><div>Productos</div></div>
                     </div> 
                     <div className={style.linkMenu}>
                        <div className={style.itemsDiv}><div>Sobre Nosotros</div></div>
                     </div>
                     <div className={style.linkMenu}>
                        <div className={style.itemsDiv}><div>Redes Sociales</div></div>
                     </div>
                  </div>
               </div>
                  
            </nav>
      </>  
   );
}

export default Nav;