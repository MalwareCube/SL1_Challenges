const challengedb = [
    {
      id: "SOC-2090",
      title: "Document Request - Review Org Chart",
      category: "Phishing Analysis",
      data: require('./SOC-2090.json'),
    },
    {
      id: "SOC-2095",
      title: "HTTP Brute Force Attempt Detected",
      category: "Network Traffic Analysis",
      data: require('./SOC-2095.json'),
    },
    {
      id: "SOC-2110",
      title: "Live Incident Response Investigation - Windows",
      category: "Windows Endpoint Analysis",
      data: require('./SOC-2110.json'),
    },
    {
      id: "SOC-2115",
      title: "I think I Downloaded Something Evil...",
      category: "Windows Event Log Analysis",
      data: require('./SOC-2115.json'),
    },
    {
      id: "SOC-2120",
      title: "Live Incident Response Investigation - Linux",
      category: "Linux Endpoint Analysis",
      data: require('./SOC-2120.json'),
    },
    {
      id: "SOC-2174",
      title: "Apache Web Server Log Investigation",
      category: "Log Analysis",
      data: require('./SOC-2174.json'),
    },
    {
      id: "SOC-2258",
      title: "Corporate Web Server Compromise",
      category: "SIEM Investigation",
      data: require('./SOC-2258.json'),
    },
    {
      id: "SOC-2315",
      title: "MITRE ATT&CK Threat Research",
      category: "Threat Intelligence",
      data: require('./SOC-2315.json'),
    },
    {
      id: "SOC-2335",
      title: "Malware Detection Rule Writing",
      category: "Threat Intelligence",
      data: require('./SOC-2335.json'),
    },
    {
      id: "SOC-2405",
      title: "Volatile Evidence Request",
      category: "Memory Analysis",
      data: require('./SOC-2405.json'),
    },
  ];

  export default challengedb;