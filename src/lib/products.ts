import { Car, Building2, Heart, Activity, Tractor, PiggyBank, Home, Stethoscope } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface ProductCoverage {
  title: string;
  description: string;
}

export interface Product {
  slug: string;
  name: string;
  shortName: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  coverages: ProductCoverage[];
  benefits: string[];
  testimonial: {
    quote: string;
    author: string;
    rating: number;
  };
}

export const products: Product[] = [
  {
    slug: "seguro-auto",
    name: "Seguro Auto",
    shortName: "veículo",
    icon: Car,
    tagline: "Proteção completa para seu veículo com assistência 24h",
    description: "Proteção completa para seu veículo com as melhores coberturas do mercado",
    coverages: [
      { title: "Colisão", description: "Cobertura contra danos por colisão e capotamento" },
      { title: "Roubo e Furto", description: "Indenização integral em caso de roubo ou furto" },
      { title: "Assistência 24h", description: "Guincho, chaveiro, troca de pneus e mais" },
      { title: "Proteção Terceiros", description: "Cobertura de danos causados a terceiros" },
    ],
    benefits: [
      "Cotação personalizada em minutos",
      "Melhor custo-benefício do mercado",
      "Assistência 24h em todo o Brasil",
    ],
    testimonial: {
      quote: "Tive um sinistro e o Davos resolveu tudo rapidamente. Meu carro ficou pronto em poucos dias!",
      author: "Junior Magrelo",
      rating: 5,
    },
  },
  {
    slug: "seguro-empresarial",
    name: "Seguro Empresarial",
    shortName: "empresa",
    icon: Building2,
    tagline: "Proteja seu negócio com cobertura sob medida",
    description: "Proteja seu negócio, patrimônio e equipe com cobertura sob medida",
    coverages: [
      { title: "Incêndio e Explosão", description: "Cobertura contra incêndios e explosões acidentais" },
      { title: "Roubo e Furto", description: "Proteção contra roubo de equipamentos e mercadorias" },
      { title: "Responsabilidade Civil", description: "Cobertura para danos a terceiros no local" },
      { title: "Lucros Cessantes", description: "Compensação por interrupção das atividades" },
    ],
    benefits: [
      "Análise personalizada do seu negócio",
      "Coberturas flexíveis por segmento",
      "Atendimento prioritário em sinistros",
    ],
    testimonial: {
      quote: "O Davos entendeu exatamente o que minha empresa precisava. Seguro completo e preço justo.",
      author: "Denner",
      rating: 5,
    },
  },
  {
    slug: "seguro-vida",
    name: "Seguro de Vida",
    shortName: "vida",
    icon: Heart,
    tagline: "Garanta tranquilidade para sua família",
    description: "Garanta tranquilidade para sua família com planos acessíveis e personalizados",
    coverages: [
      { title: "Morte Acidental", description: "Indenização para seus beneficiários" },
      { title: "Invalidez Permanente", description: "Cobertura em caso de invalidez total ou parcial" },
      { title: "Doenças Graves", description: "Auxílio financeiro para tratamento de doenças graves" },
      { title: "Assistência Funeral", description: "Cobertura completa de assistência funeral" },
    ],
    benefits: [
      "Planos a partir de R$ 30/mês",
      "Cobertura personalizada para sua família",
      "Processo simplificado de contratação",
    ],
    testimonial: {
      quote: "Ter um seguro de vida me dá a tranquilidade de saber que minha família está protegida.",
      author: "Hudson",
      rating: 5,
    },
  },
  {
    slug: "seguro-saude",
    name: "Seguro Saúde",
    shortName: "saúde",
    icon: Activity,
    tagline: "Cuide de quem você ama com planos completos",
    description: "Cuide de quem você ama com planos de saúde para pessoa física e empresas",
    coverages: [
      { title: "Consultas e Exames", description: "Rede ampla de médicos e laboratórios" },
      { title: "Internação", description: "Cobertura para internações hospitalares" },
      { title: "Urgência e Emergência", description: "Atendimento 24h em pronto-socorros" },
      { title: "Cirurgias", description: "Cobertura para procedimentos cirúrgicos" },
    ],
    benefits: [
      "Planos individuais e empresariais",
      "Ampla rede credenciada",
      "Carências reduzidas",
    ],
    testimonial: {
      quote: "Encontrei o plano ideal para toda minha família com a ajuda do Davos.",
      author: "Junior Magrelo",
      rating: 5,
    },
  },
  {
    slug: "seguro-rural",
    name: "Seguro Rural",
    shortName: "propriedade rural",
    icon: Tractor,
    tagline: "Proteção para o agronegócio regional",
    description: "Proteção para máquinas, lavouras e fazendas do agronegócio regional",
    coverages: [
      { title: "Máquinas Agrícolas", description: "Proteção para tratores e implementos" },
      { title: "Lavouras", description: "Cobertura contra perdas na produção agrícola" },
      { title: "Benfeitorias", description: "Proteção de instalações e equipamentos rurais" },
      { title: "Penhor Rural", description: "Garantia de financiamentos rurais" },
    ],
    benefits: [
      "Especialista no agro regional",
      "Coberturas específicas para MS",
      "Agilidade no processo de sinistro",
    ],
    testimonial: {
      quote: "Como produtor rural, preciso de alguém que entenda do campo. O Davos é esse cara.",
      author: "Denner",
      rating: 5,
    },
  },
  {
    slug: "previdencia-privada",
    name: "Previdência Privada",
    shortName: "futuro",
    icon: PiggyBank,
    tagline: "Planeje seu futuro com inteligência",
    description: "Educação financeira com proteção: planeje seu futuro com inteligência",
    coverages: [
      { title: "PGBL", description: "Plano gerador de benefício livre com dedução no IR" },
      { title: "VGBL", description: "Vida gerador de benefício livre para qualquer perfil" },
      { title: "Renda Mensal", description: "Receba uma renda mensal na aposentadoria" },
      { title: "Sucessão Patrimonial", description: "Planejamento patrimonial sem inventário" },
    ],
    benefits: [
      "Assessoria financeira personalizada",
      "Planos com rentabilidade competitiva",
      "Flexibilidade de aportes e resgates",
    ],
    testimonial: {
      quote: "O Davos me ajudou a planejar minha aposentadoria de forma simples e eficiente.",
      author: "Hudson",
      rating: 5,
    },
  },
  {
    slug: "seguro-residencial",
    name: "Seguro Residencial",
    shortName: "lar",
    icon: Home,
    tagline: "Seu lar protegido contra imprevistos",
    description: "Seu lar protegido contra imprevistos com coberturas completas",
    coverages: [
      { title: "Incêndio", description: "Cobertura contra incêndio, raio e explosão" },
      { title: "Roubo e Furto", description: "Proteção de bens dentro da residência" },
      { title: "Danos Elétricos", description: "Cobertura para equipamentos eletrônicos" },
      { title: "Responsabilidade Civil", description: "Danos causados a vizinhos e terceiros" },
    ],
    benefits: [
      "A partir de R$ 15/mês",
      "Assistência 24h para residência",
      "Cobertura para desastres naturais",
    ],
    testimonial: {
      quote: "Meu seguro residencial já me salvou duas vezes. Vale cada centavo!",
      author: "Junior Magrelo",
      rating: 5,
    },
  },
  {
    slug: "responsabilidade-civil",
    name: "Responsabilidade Civil",
    shortName: "atividade profissional",
    icon: Stethoscope,
    tagline: "Proteção para profissionais liberais",
    description: "Para médicos, dentistas, veterinários e profissionais liberais",
    coverages: [
      { title: "Erro Profissional", description: "Cobertura contra erros e omissões" },
      { title: "Danos Morais", description: "Proteção contra ações de danos morais" },
      { title: "Defesa Jurídica", description: "Custos de defesa judicial cobertos" },
      { title: "Danos Materiais", description: "Indenização por danos materiais causados" },
    ],
    benefits: [
      "Essencial para profissionais da saúde",
      "Coberturas amplas e personalizáveis",
      "Processo simplificado de contratação",
    ],
    testimonial: {
      quote: "Como veterinário, ter RC é fundamental. O Davos encontrou a melhor opção pra mim.",
      author: "Hudson",
      rating: 5,
    },
  },
];

export const getProductBySlug = (slug: string) => products.find((p) => p.slug === slug);
