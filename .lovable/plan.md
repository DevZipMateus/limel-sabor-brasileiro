

## Plano: Adicionar Banners de Produtos Limel ao Site

### O que temos
Quatro banners profissionais em PDF mostrando os produtos Limel:
- **300ml** -- Sorvetes em pote de 300ml (morango, baunilha, chocolate)
- **250ml** -- Sorvetes em pote de 250ml (chocolate, morango)
- **2 Litros** -- Potes de 2L (Napolitano, Flocos)
- **2 Litros Mesclados** -- Potes de 2L sabores mesclados (Abacaxi ao Vinho, Maracujá)

### O que vamos fazer

1. **Extrair as imagens dos PDFs** como JPG de alta qualidade e copiá-las para `src/assets/`

2. **Reformular a seção "Nossos Produtos"** para exibir os 4 banners em um grid 2x2 (desktop) ou empilhados (mobile), substituindo os 3 cards genéricos atuais por cards com as imagens reais dos banners

3. **Cada card terá:**
   - A imagem do banner ocupando o card inteiro
   - Nome do produto como overlay ou abaixo da imagem (ex: "Pote 300ml", "Pote 250ml", "2 Litros", "2 Litros Mesclados")
   - Bordas arredondadas e efeito hover

### Detalhes Técnicos

- Converter screenshots dos PDFs (já extraídos como JPG) para assets do projeto
- Atualizar `ProductsSection.tsx` com os 4 novos produtos e layout em grid `grid-cols-2`
- Manter animações de scroll reveal existentes

