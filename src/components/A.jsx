import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  LabelList
} from 'recharts';
import { Card, CardHeader, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { lighten, darken } from 'polished';

const A = () => {
  // const colors = {
  //   primary: '#789DBC',  // Light blue
  //   secondary: '#C7B8FF',  // Light lavender
  //   secondary2: '#9B7EBD',  //Purple
  //   accent1: '#FAC996',  // yellow
  //   accent2: '#E4B1F0',  // Light pink
  //   accent3: '#FFE9FF'
  // };
  const colors = {
    primary: darken(0.1, '#789DBC'),
    secondary: darken(0.1, '#C7B8FF'),
    accent1: darken(0.1, '#9B7EBD'),
    accent2: darken(0.1, '#FAC996'),
    secondary2: darken(0.1, '#E4B1F0'),
    accent3: '#FFE9FF'

  };
  const horizontalApps = [
    { name: 'Customer Support', value: 85 },
    { name: 'Sales', value: 70 },
    { name: 'Software Dev', value: 60 },
    { name: 'Cybersecurity', value: 50 },
    { name: 'General Workflow', value: 75 },
  ];

  const nicheMarkets = [
    { name: 'Financial Services', value: 65 },
    { name: 'Insurance', value: 55 },
    { name: 'Healthcare', value: 45 },
    { name: 'Industrials', value: 40 },
    { name: 'Gaming', value: 35 },
  ];

  const multiAgentSystems = [
    { subject: 'Check Systems', A: 80, fullMark: 100 },
    { subject: 'Specialized Agents', A: 70, fullMark: 100 },
    { subject: 'Orchestration', A: 60, fullMark: 100 },
    { subject: 'Reliability', A: 75, fullMark: 100 },
    { subject: 'Efficiency', A: 85, fullMark: 100 },
  ];

  const challengesData = [
    { name: 'Complex Reasoning', value: 30 },
    { name: 'Planning', value: 25 },
    { name: 'Reliable Execution', value: 20 },
    { name: 'Trust', value: 15 },
    { name: 'Security', value: 10 },
  ];

  // Styled Box for consistency
  const StyledBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(2),
    borderRadius: theme.shape.borderRadius,
  }));

  return (
    <StyledBox>
      <Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr 1fr 1fr' }} gap={2} mb={4} >
        <Card>
          <CardHeader title="Horizontal Applications" sx={{ color: colors.primary,  fontWeight: 'bold'}} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" paragraph>
              AI agents streamline general-purpose tasks across organizations, with strong adoption in customer support and sales.
            </Typography>
            <Box sx={{ height: 220, fontSize:15 }}>
              <ResponsiveContainer width="105%" height="100%" >
                <BarChart 
                data={horizontalApps}
                margin={{ top: 20, right: 20, left: -30 }} 

                >
                  {/* <XAxis dataKey="name" tick={{ angle: -50, dx: 0, dy: 10 , fontSize: 8}}/> */}
                  <XAxis dataKey="name" tick={false} /> 

                  <YAxis />
                  <Tooltip cursor={{ fill: colors.accent3 }} />
                  <Legend />
                  <Bar dataKey="value" fill={colors.primary} animationDuration={1000}>
                    <LabelList dataKey="name" position="inside" angle={-90} style={{ fill: 'white', fontSize: 12 }} />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardHeader title="Niche Markets"  sx={{ color: colors.primary,  fontWeight: 'bold'}}/>
          <CardContent>
            <Typography variant="body2" color="text.secondary" paragraph>
              Financial services and healthcare utilize AI for customized solutions, addressing industry-specific needs.
            </Typography>
            <Box sx={{ height: 200, fontSize:13 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={nicheMarkets}
                    cx="50%"
                    cy="50%"
                    outerRadius={50}
                    dataKey="value"
                    label={({ name, percent }) => 
                      `${name} ${(percent * 100).toFixed(0)}%`}
                    animationBegin={500}
                  >
                    {nicheMarkets.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={[colors.primary, colors.secondary, colors.accent1, colors.accent2, colors.secondary2 ][index % 6]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
     
        <Card>
          <CardHeader title="Multi-Agent Systems"  sx={{ color: colors.primary,  fontWeight: 'bold'}} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" paragraph>
              Multi-agent systems foster efficiency through collaborative actions among specialized agents.
            </Typography>
            <Box sx={{ height: 200, fontSize:15 }}>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="45%" cy="50%" outerRadius="70%" data={multiAgentSystems}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Tooltip
                    formatter={(value) => `${value}%`}
                    cursor={{ stroke: colors.accent3, strokeWidth: 1 }}
                  />
                  <Radar
                    name="Capabilities"
                    dataKey="A"
                    stroke={colors.primary}
                    fill={colors.primary}
                    fillOpacity={0.6}
                    animationDuration={1500}
                    activeDot={{ r: 8, fill: colors.accent3 }}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
 </Box>
<Box display="grid" gridTemplateColumns={{ xs: '1fr', md: '1fr' }} gap={4} mb={4}>
        <Card>
          <CardHeader title="Challenges"  sx={{ color: colors.primary,  fontWeight: 'bold'}} />
          <CardContent>
            <Typography variant="body2" color="text.secondary" paragraph>
              AI agents face hurdles like complex reasoning, security, and trust, which must be tackled for broader adoption.
            </Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={challengesData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    fill={colors.primary}
                    paddingAngle={5}
                    dataKey="value"
                    label={({ name }) => name}
                    animationDuration={1000}
                  >
                    {challengesData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={[colors.primary, colors.secondary, colors.accent1, colors.accent2, colors.secondary2][index % 6]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </StyledBox>
  );
};

export default A;
