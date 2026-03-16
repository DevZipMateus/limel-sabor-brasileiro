import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8 sm:py-12">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-3 sm:mb-4">
              <img src={logo} alt="Logo Sorvetes Limel" className="h-12 w-12 sm:h-16 sm:w-16 object-contain" />
            </div>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed">
              Fábrica de sorvetes e açaí em Osasco – SP. Qualidade, sabor e preço justo desde 2008. Fornecedor de sorvete para lojistas, mercados e revendedores.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-3 sm:mb-4">Navegação</h3>
            <nav className="flex flex-col gap-1.5 sm:gap-2">
              <a href="#inicio" className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm">Início</a>
              <a href="#produtos" className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm">Produtos</a>
              <a href="#revendedores" className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm">Revendedores</a>
              <a href="#sobre" className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm">Sobre nós</a>
              <a href="#contato" className="text-background/70 hover:text-background transition-colors text-xs sm:text-sm">Contato</a>
            </nav>
          </div>
          <div>
            <h3 className="font-display font-bold text-base sm:text-lg mb-3 sm:mb-4">Contato</h3>
            <div className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-background/70">
              <a href="https://wa.me/5511965328237" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">(11) 96532-8237</a>
              <a href="https://wa.me/5511954208127" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">(11) 95420-8127</a>
              <a href="mailto:jefferson.limel@gmail.com" className="hover:text-background transition-colors break-all">jefferson.limel@gmail.com</a>
              <p>Osasco – SP</p>
              <p>CNPJ: 10.491.537/0001-55</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-4 sm:pt-6 text-center">
          <p className="text-background/50 text-xs sm:text-sm">
            © {new Date().getFullYear()} Sorvetes Limel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
