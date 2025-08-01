"use client"

import type React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Code2, Database, Brain, Globe, Mail, MapPin, Github, Linkedin, ExternalLink, Download, GraduationCap, Award, Calendar, Menu, X, ClipboardCopy, Check } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area, Legend, Tooltip, CartesianGrid } from "recharts"
import { useRef, useEffect, useState } from "react";

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const menuRef = useRef<HTMLDivElement>(null);
  const projects = [
    {
      title: "ChatBot - Stage CA-TS",
      description: "Développement d'une documentation intéractive.",
      detailedDescription: "Dans le cadre de mon stage de fin d’études, j’ai développé un chatbot destiné à répondre aux questions des collaborateurs du **CA-TS** sur les projets **JAVA** internes.\nCe projet repose sur des modèles **LLM** accessibles via **AWS Bedrock** (Claude 3 Sonnet), intégrés à l’aide de l’outil **LangChain**. Les données extraites des projets sont stockées dans une base **Neo4j**, puis exploitées pour fournir des réponses personnalisées grâce à l’approche **KAG** (Knowledge-Augmented Generation).\n\nLe système combine plusieurs techniques avancées telles que le **RAG** (Retrieval-Augmented Generation), le **KAG**, et l’utilisation d’**agents IA contextuels**. Ces agents remplissent des rôles précis, comme :\n- Traduire une question utilisateur en une **Cypher query** pour interroger Neo4j.\n- Expliquer des données issues de Neo4J en fonction de la question posée.\n- Générer un diagramme **Mermaid** à partir des explications et des données.\n\nL’ensemble permet d’optimiser la recherche d’informations dans le cas de l'onboarding, d’améliorer l’accès à la connaissance métier au sein de l’entreprise et de retrouver plus facilement l'origine de problèmes pour les personnes du support.",
      tech: ["AWS_Bedrock", "Python", "LLM","Neo4J","RAG", "KAG", "Agents IA", "LangChain", "Vue.js", "TypeScript", "Docker", "GitLab"],
      image: "/logos_projets/cats.png",
      github: "null",
      hasDetails: true,
      documents: [
        // { name: "Powerpoint - Présentation Oral Stage", url: "" },
        // { name: "Rapport de Stage", url: "" },
      ],
    },
    {
      title: "Plateforme de Monitoring - Stage CBTW",
      description: "Création d'une plateforme de monitoring en temps réel pour optimiser les performances système des clients utilisant UiPath.",
      detailedDescription: "L’objectif de ce projet était de mettre en place une plateforme de supervision centralisée pour les environnements **UiPath** des clients.\n\nNous étions deux sur le projet, et nous avons réussi à récupérer efficacement les données via l’**API Orchestrator**, en mettant en place un **WebHook** intégré sur **Microsoft Azure**.\n\nJe me suis également chargée de la création du tableau de bord avec **Grafana**, permettant une **visualisation en temps réel** des données ainsi que la mise en place d’**alertes automatiques** en cas d’anomalie.",
      tech: ["Azure", "Azure Functions", "Grafana", "UiPath", "RPA", "Postman", "UiPath"],
      image: "/logos_projets/cbtw.png",
      github: "null",
      hasDetails: true,
      documents: [
        { name: "Powerpoint - Présentation Orale Stage", url: "/projets/Oral_Stage_CBTW.pdf" },
        { name: "Rapport de Stage", url: "/projets/BARRACHIN_Carlyne_StageFI4_CBTW.pdf" },
      ],
    },
    {
      title: "Application - Stage CERN",
      description: "Développement d'une application regroupant les informations des équipements du CERN.",
      detailedDescription: "Dans le cadre de mon stage de 3ᵉ année, j’ai développé une application **Flutter** (Dart) permettant de s’informer sur les **équipements** de l’Organisation européenne pour la recherche nucléaire (CERN).\n\nLe premier objectif de cette application était de permettre aux utilisateurs de **consulter rapidement et facilement** les informations associées aux équipements utilisés dans les **accélérateurs de particules** et les **expériences scientifiques**. Pour cela, l'application regroupais les liens de divers **sites web** du CERN, centralisant des données jusque-là dispersées.\n\nLe second objectif consistait à visualiser les **composants spécifiques** de chaque équipement et à permettre à l’utilisateur de **cliquer** dessus pour obtenir des informations détaillées (références, quantités, etc.). Cette fonctionnalité représentait la partie la plus complexe du projet, car elle nécessitait la manipulation de fichiers **SVG** représentant les plans des équipements, afin de rendre les composants interactifs et de les mettre en surbrillance lors du clic.",      
      tech: ["Flutter", "Dart", "Adobe XD", "Adobe Illustrator", "Android Emulator"],
      image: "/logos_projets/cern.png",
      github: "null",
      hasDetails: true,
      documents: [
        { name: "Powerpoint - Présentation Orale Stage", url: "/projets/StageCern.pdf" },
        { name: "Lettre de Recommandation", url: "/projets/CERN_LettreRecommandation.pdf" },
      ],
    },
    {
      title: "SOA (Service Oriented Architecture) - ERASMUS",
      description: "Plateforme de réservation de salle de réunions.",
      detailedDescription: "Projet réalisé seul, avec pour objectif principal d’explorer un large éventail de technologies tout en concevant un système logiciel fondé sur une architecture orientée microservices.\n\nJ’ai donc développé un **serveur web** exposant une **API REST sécurisée**, appuyée sur **4 microservices**, assurant la séparation des responsabilités et la maintenabilité du code.\n\nPour garantir la **scalabilité** du système, j’ai mis en place un **load balancer** (**nginx**) afin de répartir la charge entre les différents services.\n\nLa **communication interservices** repose sur un **message broker** (**RabbitMQ**) et un système de **streaming d’événements** (**Kafka**).\n\nJ’ai également développé une **application web** consommant les services REST, avec une interface utilisateur permettant d’interagir avec les différentes fonctionnalités. Cette application utilise une **architecture micro front-end**.\n\nL’ensemble de la solution a été **conteneurisé avec Docker** pour simplifier le déploiement.",
      tech: ["NestJS", "Nginx", "Docker", "Kafka", "RabbitMQ", "MongoDB", "Angular", "TypeScript", "API REST", "Microservices", "Micro front-end"],
      image: "/logos_projets/erasmus.png",
      github: "https://github.com/carlyyne/SOA_Meetings_Reservation.git",
      hasDetails: true,
      documents: [
        { name: "Tutoriel Kafka", url: "/projets/tutoKafka.pdf" },
      ],
    },
    {
      title: "Expériences ML - ERASMUS",
      description: "Réalisation de deux expérimentations dans le cadre du cours AMDA (Advanced Methods in Data Analysis), suivie de la rédaction de rapports techniques permettant de présenter et d’analyser les résultats obtenus.",
      detailedDescription:"**Premier sujet choisis (1 modèle, 3 domaines):** \nPrédire et personnaliser les préférences des utilisateurs dans trois domaines distincts (**commerce en ligne**, **divertissement**, **alimentation**) en analysant leur comportement et leurs interactions avec **XGBClassifier**. Comparer son efficacité sur les différents domaines. \nAméliorer l'expérience utilisateur grâce à des recommandations personnalisées (produits, films et recettes) en fonction de leur historique et de leurs préférences. \n**Deuxième sujet choisis (3 modèles, 1 domaine):**\n Détecter les vrais et les faux visages à l'aide de **EfficientNetB0**, **Vision Transformer** et **ResNet50**. Puis comparer les résultats obtenus.",
      tech: ["XGBoost", "XGBClassifier", "Optuna", "Data Analysis", "EfficientNetB0", "ViT-B/16", "ResNet50","Keras", "PyTorch"],
      image: "/logos_projets/erasmus.png",
      github: "null",
      hasDetails: true,
      documents: [
        { name: "1. XGBoost - Rapport Expériences", url: "/projets/BARRACHIN_Carlyne_XGBoost.pdf" },
        { name: "1. Présentation Orale", url: "/projets/Oral_XGBoost.pdf" },
        { name: "2. DeepFakes - Rapport Expériences", url: "/projets/BARRACHIN_Carlyne_AI_Images.pdf" },
        { name: "2. Présentation Orale", url: "/projets/Oral_AI_Images.pdf" },
      ],
    },
    {
      title: "Montre connectée - ERASMUS",
      description: "Étude de l’impact des activités (activité physique, stress, etc.) sur la qualité du sommeil, à travers une approche de traitement de données reçues par une montre connectée. \nUn prototype a été développé pour collecter, stocker, analyser et visualiser ces données afin d’identifier des corrélations et tendances significatives.",
      detailedDescription:"Notre équipe a développé un prototype visant à répondre à la question : **Comment nos activités diurnes influencent-elles la qualité du sommeil ?**. \nÀ partir de données récupérées (certaines en temps réel) sur la **montre** d'un de nos camarades (activité physique, stress, sommeil...), nous avons conçu une solution complète intégrant la collecte, le traitement, le stockage et la visualisation. \nJ’ai été en charge de la partie **visualisation**, la création de tableaux de bord sur **Grafana**, permettant de suivre en temps réel l’évolution de certaines données et d’identifier des corrélations (par exemple entre stress et qualité du sommeil).",
      tech: ["Grafana"],
      image: "/logos_projets/erasmus.png",
      github: "null",
      hasDetails: true,
      documents: [
        { name: "Partie Visualisation - Grafana", url: "/projets/Grafana.pdf" },
        { name: "Présentation Orale", url: "/projets/Sleep.pdf" },
      ],
    },
    {
      title: "Application Budget - Projet École",
      description: "Projet de gestion de budget personnel.",
      detailedDescription:"L’objectif de ce projet, réalisé en équipe de trois, était de concevoir une application complète en utilisant **Angular**. J’ai été en charge de la création du prototype sur **Figma**, du développement de la partie **frontend** avec l’implémentation des différents composants, ainsi que d’une contribution à la partie **backend** en fin de projet, notamment pour la mise en place de l’**API** et du lien avec le front-end.",
      tech: ["Figma","Angular", "Node.js", "MongoDB", "TypeScript", "JavaScript", "Tailwind", "HTML", "SCSS", "GitHub"],
      image: "/logos_projets/polytech.png",
      github: "https://github.com/carlyyne/PROJET_BM.git",
      hasDetails: true,
      documents: [
        { name: "Prototype Figma", url: "/projets/Prototype.pdf" },
        { name: "Résultat Final - App", url: "/projets/Budget_Management_Application.pdf" },
      ],
    },
  ]

  function FormattedText({ text }: { text: string }) {
    return text.split('\n').map((line, index) => (
      <p key={index} className="text-sm text-gray-700 mb-4 text-justify leading-relaxed whitespace-pre-line">
        {line.split(/(\*\*.*?\*\*)/g).map((chunk, i) =>
          chunk.startsWith('**') && chunk.endsWith('**') ? (
            <strong key={i}>{chunk.slice(2, -2)}</strong>
          ) : (
            <span key={i}>{chunk}</span>
          )
        )}
      </p>
    ));
  }

  const handleCopy = () => {
    navigator.clipboard.writeText("carlyne.barrachin@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 1500)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };
  
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Bloquer le scroll quand la modale est ouverte
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black relative">
      {/* Halos lumineux */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-10%] top-[-10%] md:w-[600px] md:h-[600px] sm:w-[500px] sm:h-[500px] w-[300px] h-[300px] rounded-full bg-purple-700 opacity-40 blur-3xl" />
        <div className="absolute right-[-10%] top-[20%] md:w-[500px] md:h-[500px] sm:w-[400px] sm:h-[400px] w-[250px] h-[250px] rounded-full bg-yellow-600 opacity-30 blur-3xl" />
        <div className="absolute left-1/2 top-2/3 md:w-[400px] md:h-[400px] sm:w-[300px] sm:h-[300px] w-[200px] h-[200px] rounded-full bg-pink-500 opacity-40 blur-3xl -translate-x-1/2 -translate-y-1/2" />      
      </div>

      {/* Barre de navigation principale */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90vw] max-w-3xl">
        <div className="bg-black/20 backdrop-blur-md rounded-full px-6 py-4 shadow-2xl neon-border neon-animated border-white/20 flex items-center justify-between w-full" style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.1), 0 4px 16px rgba(147, 51, 234, 0.1), inset 0 1px 0 rgba(255,255,255,0.2)", }} >
          {/* Bouton burger mobile */}
          <button className="md:hidden p-2 hover:bg-white/10 transition" onClick={() => setMenuOpen((open) => !open)} aria-label="Ouvrir le menu" >
            {menuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
          {/* Nom centré */}
          <div className="text-xl font-bold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 bg-clip-text text-transparent text-center flex-1">
            Carlyne
          </div>
          {/* Liens desktop */}
          <div className="hidden md:flex space-x-6">
            {[
              { href: "#about", label: "À Propos" },
              { href: "#skills", label: "Compétences" },
              { href: "#projects", label: "Projets" },
              { href: "#education", label: "Éducation" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="whitespace-nowrap text-white hover:text-pink-600 transition-all duration-300 px-3 py-2 rounded-full hover:bg-purple-50"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Menu déroulant mobile - à part de la nav */}
        {menuOpen && (
          <div 
            ref={menuRef}
            className={`md:hidden mt-2 bg-black/20 backdrop-blur-md rounded-3xl p-4 shadow-2xl neon-border neon-animated border-white/20 flex flex-col items-center justify-center
              transform transition-all duration-700 ease-out
              ${menuOpen 
                ? 'translate-y-0 opacity-100 scale-100' 
                : '-translate-y-8 opacity-0 scale-95 pointer-events-none'
              }
            `}
            style={{
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.1), 0 4px 16px rgba(147, 51, 234, 0.1), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
            >
          {[
            { href: "#about", label: "À Propos" },
            { href: "#skills", label: "Compétences" },
            { href: "#projects", label: "Projets" },
            { href: "#education", label: "Éducation" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block text-white px-4 py-2 rounded-3xl hover:bg-purple-50 hover:text-pink-600 transition"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                setMenuOpen(false);
              }}
              >
              {item.label}
            </a>
          ))}
          </div>
          )}
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] text-center">
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 rounded-full p-1">
            <Image
              src="/profile.png?height=120&width=120"
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full w-full h-full object-cover bg-white neon-border neon-animated"
            />
          </div>
        </div>
        <span className="inline-block px-6 py-2 mb-8 rounded-full bg-white/10 text-sm text-white font-medium backdrop-blur-md border border-white/20 m-2">
          Software Developer and Data Engineer
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 m-1">
          <span className="text-white">Bonjour, je suis</span>
          <br />
          <span className="bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg">
            Carlyne Barrachin
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl sm:mx-auto m-2">
          Étudiante Ingénieure | Informatique, Données et Usages
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/CV/CVBARRACHIN_Carlyne.pdf" download>
            <Button
              className="sm:neon-animated bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white rounded-full px-8 py-3 shadow-lg hover:from-pink-600 hover:to-purple-700 transition">
              <Download className="mr-2" />
                Télécharger CV
            </Button>
          </a>
          <a href="#contact">
            <Button
              variant="outline"
              className="rounded-full px-8 py-3 neon-animated text-white hover:bg-purple-100 bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
                Me Contacter
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-black/50 relative z-10 rounded-3xl mx-5 neon-animated">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-pink-200">
              À Propos
            </h2>
            <div className="w-12 md:w-24 h-1 bg-pink-200 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <h3 className="text-lg md:text-2xl font-semibold mb-4 sm:mb-6 text-pink-200 text-center sm:text-left">
                Utiliser les données pour répondre aux besoins
              </h3>
              <p className="text-pink-50 mb-6 leading-relaxed text text-justify">
                Étudiante en cycle ingénieur à Polytech Annecy, spécialisée en Informatique, Données et Usages. <br />
                Après un semestre de mobilité ERASMUS à l’Université Babeş-Bolyai de Cluj-Napoca, je réalise actuellement mon stage de fin d’études au Crédit Agricole Technologies et Services (CA-TS).
              </p>
              <p className="text-pink-50 mb-6 leading-relaxed text text-justify">
                Mes expériences au CERN, chez CBTW et CA-TS m'ont permis de développer une expertise technique solide en
                développement d'applications, monitoring et intelligence artificielle. J'aime allier rigueur, technique
                et créativité pour résoudre des problèmes complexes.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  Big Data
                </Badge>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  Développement Full-Stack
                </Badge>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  Intelligence Artificielle
                </Badge>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              <Card className="text-center p-1 sm:p-6 neon-border sm:neon-animated border-purple-200 transition-shadow">
                <Code2 className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mb-4 text-purple-600" />
                <h4 className="font-semibold text-gray-800">Code Propre</h4>
                <p className="text-sm text-gray-600 mt-1 sm:mt-2">Solutions maintenables et évolutives</p>
              </Card>

              <Card className="text-center p-1 sm:p-6 neon-border sm:neon-animated border-blue-200 transition-shadow">
                <Database className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mb-4 text-blue-600" />
                <h4 className="font-semibold text-gray-800">Data-Driven</h4>
                <p className="text-sm text-gray-600 mt-1 sm:mt-2">Décisions basées sur les données</p>
              </Card>

              <Card className="text-center p-1 sm:p-6 neon-border sm:neon-animated border-green-200 transition-shadow">
                <Brain className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mb-4 text-green-600" />
                <h4 className="font-semibold text-gray-800">IA/ML</h4>
                <p className="text-sm text-gray-600 mt-1 sm:mt-2">Systèmes intelligents</p>
              </Card>

              <Card className="text-center p-1 sm:p-6 neon-border sm:neon-animated border-orange-200 transition-shadow">
                <Globe className="w-8 h-8 sm:w-12 sm:h-12 mx-auto sm:mb-4 text-orange-600" />
                <h4 className="font-semibold text-gray-800">International</h4>
                <p className="text-sm text-gray-600 mt-1 sm:mt-2">Expérience multiculturelle</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Dashboard Section */}
      <section id="skills" className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-4 mb-4 text-purple-200">
              Dashboard Compétences
            </h2>
          <div className="w-20 h-1 mx-auto bg-purple-200 rounded-full"></div>
          <p className="mt-4 text-purple-50 max-w-xl mx-auto">
            Visualisation interactive de mes compétences techniques & personnelles
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8">
          {/* Hard Skills Bar Chart */}
          <Card className="bg-white/5 border border-purple-400/20 rounded-2xl hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-xl">
                <Code2 className="w-5 h-5 text-purple-400" />
                Hard Skills
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Nombre de projets majeurs réalisés par langage et framework
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={[
                        { skill: "Python", proficiency: 3 },
                        { skill: "TypeScript", proficiency: 3},
                        { skill: "Angular", proficiency: 2},
                        { skill: "Java", proficiency: 1},
                        { skill: "NestJS", proficiency: 1},
                        { skill: "Vue.js", proficiency: 1},
                        { skill: "Dart", proficiency: 1},
                        { skill: "Flutter", proficiency: 1},
                      ]} margin={{ top: 0, right: 0, left: -40, bottom: 0 }}
                    >
                    <XAxis dataKey="skill" angle={-45} textAnchor="end" height={80} fontSize={13} tick={{ fill: "#E9D5FF", fontWeight: 600 }}/>
                    <YAxis domain={[0, 4]} fontSize={13} tick={{ fill: "#E9D5FF", fontWeight: 600 }}/>                
                    <Bar dataKey="proficiency" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills Word Cloud */}
          <Card className="bg-white/5 border border-fuchsia-400/20 rounded-2xl hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-xl">
                <Brain className="w-5 h-5 text-fuchsia-400" />
                Soft Skills
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Qualités personnelles & communication
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="relative h-[300px] w-full">
                {[
                  { word: "Réactive", size: "text-2xl sm:text-4xl", color: "text-fuchsia-300", top: "0%", left: "10%" },
                  { word: "Autonome", size: "text-sm sm:text-2xl", color: "text-purple-300", top: "20%", left: "70%" },
                  { word: "Dynamique", size: "text-2xl", color: "text-pink-400", top: "40%", left: "5%" },
                  { word: "Motivée", size: "text-2xl sm:text-3xl", color: "text-purple-400", top: "10%", left: "40%" },
                  { word: "Rigoureuse", size: "text-xl", color: "text-blue-300", top: "48%", left: "29%" },
                  { word: "Organisée", size: "text-3xl sm:text-4xl", color: "text-blue-200", top: "70%", left: "40%" },
                  { word: "Impliquée", size: "text-2xl sm:text-3xl", color: "text-pink-300", top: "54%", left: "55%" },
                  { word: "Collaborative", size: "text-xl sm:text-3xl", color: "text-fuchsia-200", top: "34%", left: "55%" },
                  { word: "Curieuse", size: "text-sm sm:text-xl", color: "text-purple-200", top: "64%", left: "75%" },
                  { word: "Créative", size: "text-3xl", color: "text-pink-400", top: "25%", left: "25%" },
                  { word: "Persévérante", size: "text-xl sm:text-2xl", color: "text-purple-300", top: "61%", left: "20%" },
                  { word: "Responsable", size: "text-xl", color: "text-blue-300", top: "80%", left: "10%" },
                ].map((skill) => (
                  <span
                    key={skill.word}
                    className={`
                      ${skill.size} ${skill.color}
                      absolute font-bold transition-transform duration-300
                      hover:scale-110 hover:text-white
                      whitespace-nowrap
                    `}
                    style={{
                      top: skill.top,
                      left: skill.left,
                      textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
                    }}
                  >
                    {skill.word}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Deuxième ligne du dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-8">
          {/* Radar Chart */}
          <Card className="bg-white/5 border border-green-400/20 rounded-2xl hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-xl">
                <Database className="w-5 h-5 text-green-400" />
                Domaines d'Expertise
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Nombre de projets majeurs réalisés par domaine technique
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    data={[
                      { domain: "Big Data", level: 2 },
                      { domain: "Full-Stack", level: 3 },
                      { domain: "IA/ChatBot", level: 3 },
                      { domain: "Cloud/Azure", level: 1 },
                      { domain: "DevOps", level: 2 }
                    ]}
                    margin={{ top: 30, bottom: 30}}
                  >
                    <PolarGrid stroke="#E5E7EB"/>
                    <PolarAngleAxis dataKey="domain" fontSize={12} tick={{ fill: "#E9D5FF", fontWeight: 500 }} />
                    <PolarRadiusAxis angle={90} domain={[0, 4]} fontSize={10} tick={{ fill: "#E9D5FF", fontWeight: 600 }}/>
                    <Radar
                      name="Expertise"
                      dataKey="level"
                      stroke="#10B981"
                      fill="#10B981"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border border-orange-400/20 rounded-2xl hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white text-xl">
                <Award className="w-5 h-5 text-orange-400" />
                Domaines par Expérience
              </CardTitle>
              <CardDescription className="text-zinc-400">
                Stages & projets par Domaine d'Expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data = {[
                      { exp: "CERN (2023)", bigData: 0, fullStack: 1, ia: 0, cloud: 0, devops: 0 },
                      { exp: "App Budget (2024)", bigData: 0, fullStack: 1, ia: 0, cloud: 0, devops: 0 },
                      { exp: "CBTW (2024)", bigData: 1, fullStack: 0, ia: 0, cloud: 1, devops: 0 },
                      { exp: "Expériences ML (2024/25)", bigData: 0, fullStack: 0, ia: 1, cloud: 0, devops: 0 },
                      { exp: "Montre Connectée (2024/25)", bigData: 1, fullStack: 0, ia: 0, cloud: 0, devops: 0 },
                      { exp: "Réservation Salles (2025)", bigData: 0, fullStack: 1, ia: 0, cloud: 0, devops: 1 },
                      { exp: "CATS (2025)", bigData: 1, fullStack: 1, ia: 1, cloud: 0, devops: 1 },
                    ]} margin={{ top: 0, right: 35, left: 35, bottom: 70 }}> 
                    <XAxis
                      dataKey="exp"
                      fontSize={10}
                      tick={{ fill: "#E9D5FF", fontWeight: 600 }}
                      angle={-35}
                      textAnchor="end"
                      dy={5}
                    />
                    <YAxis hide/>
                    <Legend 
                      layout="horizontal"
                      align="center"
                      verticalAlign="top"
                      wrapperStyle={{ color: "#E5E7EB", fontSize: 12}}
                    />                    
                    <Bar dataKey="bigData" stackId="a" fill="#8B5CF6" name="Big Data" />
                    <Bar dataKey="fullStack" stackId="a" fill="#3B82F6" name="Full Stack" />
                    <Bar dataKey="ia" stackId="a" fill="#EC4899" name="IA/ChatBot" />
                    <Bar dataKey="cloud" stackId="a" fill="#F59E42" name="Cloud/Azure" />
                    <Bar dataKey="devops" stackId="a" fill="#10B981" name="DevOps" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Statistiques finales */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-4 sm:mt-10">
          {[
            {
              count: 3,
              label: "Langages Maîtrisés",
              from: "from-purple-300/10",
              to: "to-purple-700/30",
              glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"  
            },
            {
              count: 3,
              label: "Stages Réalisés",
              from: "from-pink-300/10",
              to: "to-pink-700/30",
              glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.5)]",
            },
            {
              count: 2,
              label: "Langues Parlées (FR/EN)",
              from: "from-orange-300/10",
              to: "to-orange-700/30",
              glow: "hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]",
            },
          ].map((stat, i) => (
          <div key={i} className={`
                bg-gradient-to-tr ${stat.from} ${stat.to} 
                backdrop-blur-sm border border-white/10
                p-2 sm:p-6 rounded-2xl text-white text-center 
                shadow-md transition-shadow duration-300 ${stat.glow}
                ${i === 2 ? 'col-span-2 md:col-span-1' : ''}
              `}
              >
              <div className="text-3xl sm:text-5xl font-extrabold tracking-wide drop-shadow-sm">{stat.count}</div>
              <div className="text-xs sm:text-sm text-white/70 mt-2 tracking-wide">{stat.label}</div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-black/50 relative z-10 rounded-3xl mx-5 neon-animated">
          <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-pink-200">
            Projets & Expériences
            </h2>
            <div className="w-12 md:w-24 h-1 bg-pink-200 mx-auto rounded-full"></div>
          </div>

          <div className="flex items-center mb-4">
            <span className="text-sm text-pink-50 mr-2">Faites défiler</span>
            <svg className="w-4 h-4 animate-bounce-right text-pink-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          <div className="flex gap-8 overflow-x-auto">
            {projects.map((project, index) => (
              <Card key={index} className="rounded-2xl max-w-xs flex-shrink-0 flex flex-col justify-between hover:brightness-90">
                <div className="relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                  <CardDescription className="hidden sm:block text-gray-600">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="hidden sm:block">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center gap-2">
                      {project.github !== "null" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="flex-1 bg-transparent rounded-full"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                      )}

                      {project.hasDetails && (
                        <Button
                          size="sm"
                          className={
                            `${project.github !== "null" ? "flex-1 " : "px-7 "}bg-gradient-to-r from-fuchsia-500 to-purple-800 text-white font-semibold rounded-full shadow-lg neon-animated hover:brightness-125 hover:shadow-[0_0_24px_4px_rgba(236,72,153,0.4)] transition-all duration-300`
                          }
                          onClick={() => setSelectedProject(project)}
                          >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Détails
                        </Button>
                      )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)} // ferme si on clique en dehors
          >
            <div
              className="relative bg-white rounded-2xl shadow-xl w-[85%] max-w-xl max-h-[80vh] overflow-hidden animate-fade-in-up"
              onClick={(e) => e.stopPropagation()} // empêche de fermer si on clique dans la modale
            >
              {/* Header fixe avec titre et bouton fermer */}
              <div className="sticky top-0 bg-white px-6 py-4 border-b border-gray-200 z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-800 pr-8">{selectedProject.title}</h3>
                  <button
                    className="text-gray-500 hover:text-black transition-all duration-300 hover:scale-110 p-1"
                    onClick={() => setSelectedProject(null)}
                    aria-label="Fermer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Contenu scrollable */}
              <div className="px-6 py-4 overflow-y-auto max-h-[calc(70vh-80px)]">
                {/* Technologies - seulement sur mobile */}
                <div className="mb-4 sm:hidden">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">Technologies utilisées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech: string, index: number) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/*Description détaillée */}
                <FormattedText text={selectedProject.detailedDescription} />

                {/* Documents */}
                {selectedProject.documents?.length > 0 ? (
                  <div className="space-y-2 mt-4">
                    <h4 className="text-sm font-semibold text-gray-800 mb-2">Documents :</h4>
                    {selectedProject.documents.map((doc: any, index: any) => (
                      <a
                        key={index}
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-blue-600 hover:text-blue-800 text-sm underline py-1"
                      >
                        📄 {doc.name}
                      </a>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-gray-500 italic mt-4">Aucun document disponible.</p>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Education Section */}
      <section id="education" className="py-6 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mt-4 mb-4 text-purple-200">
              Formation & Réalisations
            </h2>
            <div className="w-24 h-1 bg-purple-200 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
            <Card className="p-6 sm:p-8 bg-white/5 border border-purple-300/20 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-purple-100 rounded-full shadow-md">
                  <GraduationCap className="w-4 h-4 sm:w-7 sm:h-7 text-purple-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Cycle Ingénieur</h3>
                  <p className="text-purple-400 font-medium text-base sm:text-lg mb-4">Polytech Annecy</p>
                  <Badge className="mb-4 bg-pink-200 text-pink-800 text-xs font-semibold rounded-full px-3 py-1 hover:bg-white/10 hover:text-pink-200 hover:shadow-[0_0_24px_4px_rgba(236,72,153,0.2)] transition-all duration-300">
                    🌍 ERASMUS - Semestre 1, 2024–2025 — Cluj-Napoca, Roumanie
                  </Badge>
                  <div className="space-y-2 sm:space-y-3 mb-4">
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-purple-300 mt-1" />
                      <div>
                        <p className="text text-zinc-300 font-semibold">2022 – 2025</p>
                        <p className="text-sm text-zinc-400">Cycle Ingénieur — Spécialité Informatique, Données & Usages</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Calendar className="w-4 h-4 text-purple-300 mt-1" />
                      <div>
                        <p className="text text-zinc-300 font-semibold">2020 – 2022</p>
                        <p className="text-sm text-zinc-400">PeiP (Parcours des écoles d'ingénieurs Polytech)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 sm:p-8 bg-white/5 border border-blue-300/20 backdrop-blur-md rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-100 rounded-full shadow-md">
                  <Award className="w-4 h-4 sm:w-7 sm:h-7 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Réalisations Clés</h3>
                  <ul className="space-y-2 sm:space-y-4 text-sm text-zinc-300">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-blue-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-white">Stage orienté IA – Développement ChatBot au CA-TS</p>
                        <p className="text-xs text-zinc-400">2025</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-purple-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-white">TOEIC 890 – Niveau B2 Anglais</p>
                        <p className="text-xs text-zinc-400">2024</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-pink-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-white">Stage au CERN, Collaboration en anglais</p>
                        <p className="text-xs text-zinc-400">2023</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                      <div>
                        <p className="font-medium text-white">Vie associative à Polytech</p>
                        <p className="text-xs text-zinc-400 mb-1">2023–2024</p>
                        <ul className="text-zinc-400 list-disc list-inside text-sm space-y-1">
                          <li>Membre active du BDE Polytech</li>
                          <li>Responsable communication d’une association de photos</li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-6 md:py-20 px-4 sm:px-6 lg:px-8 bg-black/50 rounded-3xl m-5 neon-animated">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold mb-4 text-pink-200">
              Travaillons Ensemble
            </h2>
            <div className="w-24 h-1 bg-pink-200 mx-auto rounded-full"></div>
            <p className="text-pink-50 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-lg">
              Je suis toujours ouverte aux nouvelles opportunités, projets innovants ou simplement pour échanger.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-10">
            {/* Colonne gauche */}
            <div className="flex flex-col justify-between gap-8">
              {/* Localisation */}
              <div className="flex items-center gap-5 text-white justify-center">
                <div className="p-4 bg-white/10 border border-white/20 rounded-full shadow-md">
                  <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg sm:text-xl ">Localisation</h4>
                  <p className="text-zinc-300">Allonzier-la-Caille, France</p>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div className="flex space-x-4 justify-center">
                <a href="https://github.com/carlyyne" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-white/5 sm:neon-animated py-4 px-8 rounded-full shadow-lg bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 text-white hover:text-white flex items-center gap-3 hover:brightness-125 hover:shadow-[0_0_24px_4px_rgba(236,72,153,0.4)] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4 sm:w-6 sm:h-6" />
                </Button>
                </a>
                <a href="https://www.linkedin.com/in/carlyne-barrachin/" target="_blank" rel="noopener noreferrer">
                <Button
                  size="icon"
                  variant="outline"
                  className="border-white/5 sm:neon-animated py-4 px-8 rounded-full shadow-lg bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 text-white hover:text-white flex items-center gap-3 hover:brightness-125 hover:shadow-[0_0_24px_4px_rgba(236,72,153,0.4)] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </Button>
                </a>
              </div>
            </div>

            {/* Colonne droite */}
            <div className="flex flex-col justify-between gap-8">
              {/* Email */}
              <div className="flex items-center gap-5 text-white justify-center">
                <div className="text-right">
                  <h4 className="font-semibold text-lg sm:text-xl">Email</h4>
                  <div className="flex gap-2">
                    <p className="text-zinc-300 break-all">carlyne.barrachin@gmail.com</p>
                    <button
                      onClick={handleCopy}
                      className="text-zinc-400 hover:text-white transition hover:scale-110"
                      aria-label="Copier l'adresse email"
                    >
                      {copied ? <Check className="w-4 h-4 text-green-400" /> : <ClipboardCopy className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
                <div className="p-4 bg-white/10 border border-white/20 rounded-full shadow-md">
                  <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
              </div>

              {/* Bouton Contact */}
              <div className="flex justify-center">
                <Button
                  asChild
                  className="border-white/5 sm:neon-animated py-4 px-8 font-semibold rounded-full shadow-lg bg-gradient-to-r from-fuchsia-500 via-pink-500 to-purple-500 text-white flex items-center gap-3 hover:brightness-125 hover:shadow-[0_0_24px_4px_rgba(236,72,153,0.4)] focus:outline-none focus:ring-2 focus:ring-fuchsia-400 transition-all"
                >
                  <a
                    href={`mailto:carlyne.barrachin@gmail.com?subject=Contact%20depuis%20le%20portfolio`}
                    aria-label="Envoyer un message par email"
                  >
                    <Mail className="w-4 h-4 sm:w-6 sm:h-6 -ml-1" />
                    Envoyer un Message
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-zinc-400">© 2025 Carlyne Barrachin. Développé avec Next.js et Tailwind CSS.</p>
        </div>
      </footer>

    </div>
  )
}