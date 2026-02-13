import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center shadow-lg mb-4">
              <img src={logo} alt="Logo Sorvetes Limel" className="h-16 w-16 object-contain" />
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Sorvetes e açaí artesanais com qualidade, sabor e preço justo para famílias, comerciantes e parceiros.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Navegação</h3>
            <nav className="flex flex-col gap-2">
              <a href="#inicio" className="text-background/70 hover:text-background transition-colors text-sm">Início</a>
              <a href="#sobre" className="text-background/70 hover:text-background transition-colors text-sm">Sobre nós</a>
              <a href="#produtos" className="text-background/70 hover:text-background transition-colors text-sm">Produtos</a>
              <a href="#mercado" className="text-background/70 hover:text-background transition-colors text-sm">Mercado</a>
              <a href="#contato" className="text-background/70 hover:text-background transition-colors text-sm">Contato</a>
            </nav>
          </div>
          <div>
            <h3 className="font-display font-bold text-lg mb-4">Contato</h3>
            <div className="flex flex-col gap-2 text-sm text-background/70">
              <a href="https://wa.me/5511965328237" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">(11) 96532-8237</a>
              <a href="https://wa.me/5511954208127" target="_blank" rel="noopener noreferrer" className="hover:text-background transition-colors">(11) 95420-8127</a>
              <a href="mailto:jefferson.limel@gmail.com" className="hover:text-background transition-colors">jefferson.limel@gmail.com</a>
              <p>Av. Benedito Alves Turíbio, 40</p>
              <p>CNPJ: 10.491.537/0001-55</p>
            </div>
          </div>
        </div>
        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-background/50 text-sm">
            © {new Date().getFullYear()} Sorvetes Limel. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
