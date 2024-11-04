import React from 'react';
import { Box, Typography, CardHeader, Grid, Card, CardContent, Divider } from '@mui/material';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import GamepadIcon from '@mui/icons-material/Gamepad';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SafetyCheckIcon from '@mui/icons-material/SafetyCheck';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import { styled } from '@mui/material/styles';
import { lighten, darken } from 'polished';
import normlogo from '../assets/normAi.png'
import ParchaAILogo from '../assets/parchaAi.png' 
import HabbiaMatrixLogo from '../assets/hebbiaAi.png'
import RootsAutoLogo from '../assets/rootsAuto.png'
import SukiAiLogo from '../assets/sukiAi.png'
import DeepScribe from '../assets/deepScribe.png'
import UptakeAiLogo from '../assets/uptakeAi.png'
import UnityAiLogo from '../assets/unityAi.png'
import DeepMind from '../assets/DeepMin.png'
import AlteraAiLogo from '../assets/alteraAi.png'
import SparkCognition from '../assets/sparkCognitionAi.png'
import ComposableAiLogo from '../assets/composableAi.png'
import SierrraLogo from '../assets/sierra-logo.png'
import emergenceAiLogo from '../assets/emergenceAi.png'
import Klarna from '../assets/klarnaAi.png'
import X11ai from '../assets/11Xai.png'
import ClayAiLogo from '../assets/clayAi.png'
import CognitionAiLogo from '../assets/cognitionAi.png'
import MagicAiLogo from '../assets/magicAi.png'
import NullifyAiLogo from '../assets/nullifyAi.png'
import DropzoneAiLogo from '../assets/DropzoneAi.png'
import EmaAiLogo from '../assets/emaAi.png'


import A from './A';
const colors = {
  primary: darken(0.1, '#789DBC'),
  secondary: darken(0.1, '#C7B8FF'),  // Light lavender
  secondary2: darken(0.1, '#9B7EBD'),  // Purple
  // accent1: '#FAC996',  // Yellow
  // accent2: '#E4B1F0',  // Light pink
  accent3: '#FFF3FF',  // Light background pink
};

const data = {
  "Industry-Specific Applications": [
    {
        icon:<AccountBalanceIcon/>,
      industry: "Financial Services",
      applications: [
        { name: "Compliance", companies: ["Norm AI", "Parcha AI"] , logo: [normlogo, ParchaAILogo]},
        { name: "Investment Research", companies: ["Hebbia's Matrix"], logo:[HabbiaMatrixLogo]}
      ],
      desc: "AI-driven insights enable faster, accurate compliance checks and enhance decision-making in investment research.",
    },
    {
      icon: <SafetyCheckIcon/>,
      industry: "Insurance",
      applications: [
        { name: "Underwriting", companies: ["Roots Automation"], logo: [RootsAutoLogo], size: { width: "100px", height: "auto" } },
        { name: "Claims Processing", companies: ["Roots Automation"],logo: [RootsAutoLogo], size: { width: "100px", height: "auto" } }
      ],
      desc: "AI improves efficiency in underwriting and claims processing, ensuring higher accuracy and faster response times."
    },
    {
        icon:<MedicalServicesIcon/>,
      industry: "Healthcare",
      applications: [{ name: "Medical Scribes", companies: ["Suki AI", "DeepScribe"], logo:[SukiAiLogo, DeepScribe] }],
      desc: "AI-powered medical scribes reduce the documentation burden on healthcare professionals, enhancing patient care quality."
 
    },
    {
        icon: <PrecisionManufacturingIcon/>,
      industry: "Industrials",
      applications: [{ name: "Process Optimization", companies: ["Composable"], logo: [ComposableAiLogo], size: { width: "100px", height: "auto" } },
      { name: "Predictive Maintenance", companies: ["Uptake", "SparkCognition"], logo: [UptakeAiLogo, SparkCognition], size: { width: "100px", height: "auto" }  }
    ],
      desc: "AI automates and optimizes industrial processes, from equipment control to predictive maintenance, minimizing downtime."
 
    },
    {
      icon: <SportsEsportsIcon/>,
      industry: "Gaming",
      applications: [
        { name: "Non-Player Characters (NPCs)", companies: ["DeepMind", "Altera"], logo:[DeepMind, AlteraAiLogo], size: { width: "90px", height: "auto" } },
        { name: "Dynamic Content Generation", companies: ["Unity AI"], logo:[UnityAiLogo], size: { width: "70px", height: "auto" } }
      ],
      desc: "AI enhances interactive gaming experiences by creating realistic NPCs and dynamic content, engaging players more deeply."

    }
  ],
  "Horizontal Applications": [
    {
        icon:<AccountCircleIcon/>,
      application: "Customer Support",
      description: "AI-powered agents for complex conversations - potentially replacing human agents",
      examples: [{ company: "Klarna",logo: Klarna, savings: "saves $40M annually by automating support for 700 agents" }, 
        { company: "Sierra", logo:SierrraLogo, feature: "provides multi-agent 'check systems' for reliability" }]
    },
    {
        icon: <TrendingUpIcon/>,
      application: "Sales",
      description: "AI SDRs for outbound sales - automate processes like lead routing and personalized messaging",
      examples: [{ company: "11xAI",logo:X11ai, feature: "uses 'AI SDRs' for Outbound automation sales" }, 
        { company: "Clay", logo:ClayAiLogo, feature: "automates lead research and qualification" }]
    },
    {
      icon:<DeveloperModeIcon/>,
      application: "Software Development",
      description: "AI coding assistants for software - evolving to handle more complex tasks",
      examples: [{ company: "Cognition", logo: CognitionAiLogo, stage: "Early, focusing on true coding agents that handle complex development tasks" }, 
        { company: "Magic", logo: MagicAiLogo, stage: "Early, working on coding assistants that aim to replace human engineers" }]
    },
    {
        icon: <SecurityIcon/>,
      application: "Cybersecurity",
      description: "AI agents for alert investigation and reporting",
      examples: [{ company: "Nullify", logo: NullifyAiLogo, role: "developing AI security engineers for investigating alerts and generating reports" }, 
        { company: "Dropzone AI", logo: DropzoneAiLogo, role: "providing SOC analysts to enhance security operations" }]
    },
    {
      icon: <SettingsSuggestIcon/>,
      application: "General Enterprise Workflow Automation",
      description: "Universal AI employees - target various enterprise workflows across industries",
      examples: [{ company: "Ema", logo: EmaAiLogo, functions: ['positions in HR and Marketing', 'targeting various enterprise workflows'] }]
    }
  ],
  "Multi-Agent Systems": [
    {
        icon:<VerifiedUserIcon/>,
      system: "Check Systems",
      description: "One AI verifies another’s output to ensure accuracy and quality in responses.",
      examples: [{ company: "Sierra" }],logo:SierrraLogo

    },
    {
        icon:<EngineeringIcon/>,
      system: "Specialized Agents",
      description: "Companies are developing task-specific agents, enabling faster, focused solutions.",
      examples: [{ company: "Various" }]
    },
    {
        icon:<GamepadIcon/>,
      system: "Orchestration",
      description: "Assigns tasks to the most effective AI agent for scalable workflows.",
      examples: [{ company: "Emergence AI" }],
logo: emergenceAiLogo
    }
  ]
};

const AIWorkflowInsights = () => {
  return (
<Box sx={{ padding: 3, backgroundColor: colors.accent3 }}>
  <Typography
    variant="h4"
    gutterBottom
    sx={{ color: colors.secondary2, fontWeight: 'bold', marginBottom: 3 }}
  >
    AI Agents Transforming Enterprise Workflows
  </Typography>
  <Typography
    variant="body1"
    sx={{ color: colors.primaryText, marginBottom: 3 }}
  >
    AI agents, powered by large language models (LLMs), have the potential to automate complex tasks across various roles, from customer support to software development, enhancing productivity and efficiency in enterprise workflows.
  </Typography>

  <A/>

   <Typography variant="h5" sx={{ color: colors.primary, fontWeight: 'bold', marginBottom: 3 }}>
        Horizontal Applications
      </Typography>
      <Grid container spacing={3}>
        {data['Horizontal Applications'].map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
          sx={{
            backgroundColor: colors.background,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            borderRadius: 2,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.03)' },
            height: 290

          }}
        >
              <CardContent>
              <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 2,
                color: colors.primary,
              }}
            > {item.icon}
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginLeft: 1  }}>
                  {item.application}
                </Typography>
                </Box>
                <Typography variant="body2" sx={{ marginTop: 1,color: colors.secondaryText, marginBottom: 2 }}>
                  {item.description}
                </Typography>
                <Box component="ul" sx={{ paddingLeft: 2 }}>
                {item.examples.map((ex, i) => (
                  <Box key={i} sx={{ marginTop: 1 }}>
                    <Box key={i} component="li" sx={{ marginBottom: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      color: colors.secondary2,
                      marginBottom: 0.5,
                    }}
                  >
                    {/* {ex.company} */}
                  </Typography>
                 <img src={ex.logo} alt={`${item.name} logo`} width="60" height="auto"/>

                  </Box>
                    <Typography variant="body2">
                      {ex.savings || ex.feature || ex.stage || ex.role || (ex.functions && ex.functions.join(', '))}
                    </Typography>
                  </Box>
                ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

  <Typography
    variant="h5"
    sx={{ color: colors.primary, fontWeight: 'bold', marginBottom: 3 }}
  >
    Niche Market Applications
  </Typography>

  <Grid container spacing={3}>
    {data['Industry-Specific Applications'].map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            backgroundColor: colors.background,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            borderRadius: 2,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.03)' },
            height: 330
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 2,
                color: colors.primary,
                height: 50
              }}
            >
              {item.icon}
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginLeft: 1 }}
              >
                {item.industry}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: colors.secondaryText, marginBottom: 2 }}
            >
              {item.desc}
            </Typography>

            <Box component="ul" sx={{ paddingLeft: 2 }}>
              {item.applications.map((app, i) => (
                <Box key={i} component="li" sx={{ marginBottom: 1 }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 'bold',
                      color: colors.secondary2,
                      marginBottom: 0.5,
                    }}
                  >
                    {app.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: colors.secondaryText }}>
                    {/* {app.companies.join(', ')} */}
                    {/* <img src={app.logo} alt={`${item.name} logo`} width="100" height="auto"/> */}
                    {/* Render logos only if they exist */}
                    {app.logo?.length > 0 && (
  <div className="logos">
    {app.logo.map((logo, i) => (
      <img
        key={i}
        src={logo}
        alt={`${app.name} logo ${i + 1}`}
        style={{
          width: app.size?.width || "auto",        // Default width
          height: app.size?.height || "15px",       // Default height
          objectFit: "cover",
          marginRight: "10px"
        }}
      />
    ))}
  </div>
)}

                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
{/* </Box> */}

      <Divider sx={{ my: 4 }} />

      <Box sx={{ padding: 3, backgroundColor: colors.accent3 }}>
  <Typography
    variant="h5"
    sx={{ color: colors.primary, fontWeight: 'bold', marginBottom: 3 }}
  >
    Multi-Agent Systems
  </Typography>

  <Grid container spacing={3}>
    {data['Multi-Agent Systems'].map((item, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <Card
          sx={{
            backgroundColor: colors.background,
            boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            borderRadius: 2,
            padding: 2,
            transition: 'transform 0.3s ease',
            '&:hover': { transform: 'scale(1.03)' },
            height: 200

          }}
        >
          <CardContent>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: 2,
                color: colors.primary,
              }}
            >
              {item.icon}
              <Typography
                variant="h6"
                sx={{ fontWeight: 'bold', marginLeft: 1 }}
              >
                {item.system}
              </Typography>
            </Box>

            <Typography
              variant="body2"
              sx={{ color: colors.secondaryText, marginBottom: 2 }}
            >
              {item.description}
            </Typography>

            {/* <Box component="ul" sx={{ paddingLeft: 2 }}>
              {item.examples.map((ex, i) => (
                <Box key={i} component="li" sx={{ marginBottom: 1 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: colors.secondary2 }}
                  > */}
                    {/* {ex.company} */}
                    {item.logo?.length > 0 && (
                    <img src={item.logo} alt={`${item.name} logo`} width="100" height="auto"/>
                    )}
                  {/* </Typography>
                </Box> */}
              {/* ))}
            </Box> */}
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
</Box>
<CardHeader title="Conclusion" sx={{ color: colors.primary , fontWeight: 'bolder'}} />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            While challenges in reliability remain, AI agents offer enterprises the opportunity to automate complex workflows, enhance productivity, 
            and redefine roles across industries. Embracing these innovations will be critical for companies aiming to stay competitive in an AI-driven world.
          </Typography>
        </CardContent>
</Box>
  );
};

export default AIWorkflowInsights;

