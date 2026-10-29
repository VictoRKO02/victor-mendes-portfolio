# Victor Mendes | Portfólio

Portfólio em Next.js 16 e TypeScript. **Esta versão foi incrementada diretamente sobre o site original**, preservando layout, identidade visual, card 3D VM, navegação, animações e estilos de todas as seções.

## Refinamentos de apresentação (29/10/2026)

- Resgatado o título da capa: “Transformo dados em decisões, automações e produtos úteis.”
- Combinada a descrição profissional de desenvolvimento de software, BI, dados, automações e ML.
- Três destaques na capa: estágio desde 2025, engenharia de software e análises com IA.
- Sobre reescrito com integração de dados, stack de BI/arquitetura e exemplos ECHO, Iris ML e Chromatic Vision.
- Competências reorganizadas nos mesmos quatro cartões, cobrindo software, IA/ML, BI/arquitetura e infraestrutura.
- Mantido o título original da Stack “Da origem do dado ao indicador de negócio.” e ampliadas suas quatro etapas para engenharia, ML, integração e entrega.
- Identidade visual, monograma VM, componentes, navegação e demais seções preservados.

## Atualizações desta versão

- Apresentação focada em Engenharia de Software, IA, Machine Learning e Dados.
- Adicionados projetos ECHO, Iris ML, Chromatic Vision, dengue, Petshop DW, Empório da Tatá, plataforma TOPSIS e Cimatlética Vision, sem remover os projetos existentes.
- Filtros funcionais na seção de projetos, com mesma identidade visual dos cartões originais.
- Links de repositórios e comprovantes AWS nos projetos, links de certificados na formação.
- Atualizados competências, trajetória profissional, título/descrição SEO e currículo.
- Todos os exemplos de sistemas corporativos são descritivos e não expõem dados da empresa.

## Requisitos

Node.js compatível com Next.js 16 (Node.js 20.9+; recomenda-se 22 LTS) e npm.

## Executar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000. Para testar antes da publicação:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Publicar no GitHub e Vercel

Substitua o conteúdo do repositório pelo deste ZIP, mantendo a pasta `.git` local se já existir, e então:

```bash
git add .
git commit -m "feat: amplia portfolio original com IA ML e projetos"
git push origin main
```

O deploy é iniciado automaticamente se a branch `main` estiver conectada à Vercel.

## Ajustes rápidos

- Projetos, tags e links: `src/components/Projects.tsx`
- Apresentação / card VM: `src/components/Hero.tsx`
- Competências: `src/components/About.tsx` e `src/components/Stack.tsx`
- Formação e comprovantes: `src/components/Education.tsx`
- PDF: `public/documents/Victor_Mendes_CV.pdf`

> Observação: o GitHub dos projetos é público; projetos corporativos são mostrados sem códigos ou dados internos.
