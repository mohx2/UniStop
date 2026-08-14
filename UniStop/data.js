const universitiesData = [
  {
    "id": "nust",
    "name": "National University of Sciences & Technology",
    "shortName": "NUST",
    "city": "Islamabad",
    "qsRanking": "World #353 | Asia #68 (#1 in Engineering Pakistan)",
    "overallRating": 9.6,
    "logo": "https://upload.wikimedia.org/wikipedia/en/2/26/NUST_Vector_Logo.svg",
    "formula": {
      "matric": 0.10,
      "fsc": 0.15,
      "test": 0.75,
      "testName": "NET (NUST Entry Test)"
    },
    "requirements": {
      "fscMin": "60% minimum in FSc (Pre-Engineering / ICS)",
      "equivalence": "IBCC Equivalence required for O/A Level students",
      "testRequirement": "Mandatory NET or SAT/ACT for international seat streams"
    },
    "scholarships": [
      "Need-Based Financial Aid (NUST Trust Fund)",
      "HEC Need-Based Scholarship",
      "PEEF (Punjab Educational Endowment Fund)",
      "EHSAAS Undergraduate Scholarship Program"
    ],
    "departments": [
      {
        "name": "BS Computer Science (SEECS)",
        "rating": 9.8,
        "closingMerit2025": "79.40%",
        "closingMerit2024": "78.85%",
        "closingMerit2023": "77.90%",
        "closingMerit2022": "76.50%",
        "closingMerit2021": "75.80%"
      },
      {
        "name": "BS Software Engineering (SEECS)",
        "rating": 9.7,
        "closingMerit2025": "78.20%",
        "closingMerit2024": "77.50%",
        "closingMerit2023": "76.80%",
        "closingMerit2022": "75.40%",
        "closingMerit2021": "74.90%"
      },
      {
        "name": "BS Artificial Intelligence (SEECS)",
        "rating": 9.7,
        "closingMerit2025": "78.90%",
        "closingMerit2024": "78.10%",
        "closingMerit2023": "77.00%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Data Science (SEECS)",
        "rating": 9.5,
        "closingMerit2025": "77.80%",
        "closingMerit2024": "76.90%",
        "closingMerit2023": "76.10%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BE Electrical Engineering (SEECS)",
        "rating": 9.5,
        "closingMerit2025": "68.50%",
        "closingMerit2024": "69.10%",
        "closingMerit2023": "70.20%",
        "closingMerit2022": "71.00%",
        "closingMerit2021": "72.40%"
      },
      {
        "name": "BE Mechanical Engineering (SMME)",
        "rating": 9.4,
        "closingMerit2025": "67.20%",
        "closingMerit2024": "68.00%",
        "closingMerit2023": "69.50%",
        "closingMerit2022": "70.80%",
        "closingMerit2021": "72.10%"
      },
      {
        "name": "BE Mechatronics Engineering (CME)",
        "rating": 9.3,
        "closingMerit2025": "69.10%",
        "closingMerit2024": "70.00%",
        "closingMerit2023": "70.90%",
        "closingMerit2022": "71.80%",
        "closingMerit2021": "73.00%"
      },
      {
        "name": "BE Civil Engineering (NICE)",
        "rating": 9.2,
        "closingMerit2025": "64.80%",
        "closingMerit2024": "65.50%",
        "closingMerit2023": "66.80%",
        "closingMerit2022": "68.20%",
        "closingMerit2021": "70.10%"
      },
      {
        "name": "BE Chemical Engineering (SCME)",
        "rating": 9.1,
        "closingMerit2025": "63.50%",
        "closingMerit2024": "64.20%",
        "closingMerit2023": "65.50%",
        "closingMerit2022": "67.00%",
        "closingMerit2021": "69.00%"
      },
      {
        "name": "BE Aerospace Engineering (CAE)",
        "rating": 9.6,
        "closingMerit2025": "74.10%",
        "closingMerit2024": "74.80%",
        "closingMerit2023": "75.20%",
        "closingMerit2022": "76.00%",
        "closingMerit2021": "77.10%"
      },
      {
        "name": "BE Avionics Engineering (CAE)",
        "rating": 9.5,
        "closingMerit2025": "73.50%",
        "closingMerit2024": "74.00%",
        "closingMerit2023": "74.80%",
        "closingMerit2022": "75.50%",
        "closingMerit2021": "76.40%"
      },
      {
        "name": "BE Environmental Engineering (IESE)",
        "rating": 8.8,
        "closingMerit2025": "61.20%",
        "closingMerit2024": "62.00%",
        "closingMerit2023": "63.10%",
        "closingMerit2022": "64.50%",
        "closingMerit2021": "66.00%"
      },
      {
        "name": "BS BBA (NBS)",
        "rating": 9.4,
        "closingMerit2025": "74.50%",
        "closingMerit2024": "73.80%",
        "closingMerit2023": "72.90%",
        "closingMerit2022": "72.10%",
        "closingMerit2021": "71.50%"
      },
      {
        "name": "BS Accounting & Finance (NBS)",
        "rating": 9.3,
        "closingMerit2025": "73.20%",
        "closingMerit2024": "72.50%",
        "closingMerit2023": "71.80%",
        "closingMerit2022": "71.00%",
        "closingMerit2021": "70.20%"
      },
      {
        "name": "BS Economics (S3H)",
        "rating": 9.0,
        "closingMerit2025": "69.80%",
        "closingMerit2024": "68.90%",
        "closingMerit2023": "68.10%",
        "closingMerit2022": "67.40%",
        "closingMerit2021": "66.80%"
      },
      {
        "name": "BS Psychology (S3H)",
        "rating": 9.0,
        "closingMerit2025": "71.40%",
        "closingMerit2024": "70.50%",
        "closingMerit2023": "69.80%",
        "closingMerit2022": "68.90%",
        "closingMerit2021": "68.00%"
      },
      {
        "name": "BS Public Administration (S3H)",
        "rating": 8.7,
        "closingMerit2025": "66.10%",
        "closingMerit2024": "65.20%",
        "closingMerit2023": "64.50%",
        "closingMerit2022": "63.80%",
        "closingMerit2021": "63.00%"
      },
      {
        "name": "BS Biotechnology (ASAB)",
        "rating": 9.2,
        "closingMerit2025": "72.90%",
        "closingMerit2024": "72.10%",
        "closingMerit2023": "71.40%",
        "closingMerit2022": "70.80%",
        "closingMerit2021": "70.00%"
      },
      {
        "name": "B.Architecture (SADA)",
        "rating": 9.5,
        "closingMerit2025": "75.80%",
        "closingMerit2024": "75.00%",
        "closingMerit2023": "74.20%",
        "closingMerit2022": "73.50%",
        "closingMerit2021": "73.00%"
      },
      {
        "name": "BS Industrial Design (SADA)",
        "rating": 9.1,
        "closingMerit2025": "71.10%",
        "closingMerit2024": "70.20%",
        "closingMerit2023": "69.50%",
        "closingMerit2022": "68.80%",
        "closingMerit2021": "68.00%"
      }
    ]
  },
  {
    "id": "fast",
    "name": "FAST National University of Computer & Emerging Sciences",
    "shortName": "FAST-NUCES",
    "city": "Lahore / Islamabad / Karachi",
    "qsRanking": "Asia #301-350 | Top 3 CS in Pakistan",
    "overallRating": 9.5,
    "logo": "https://upload.wikimedia.org/wikipedia/en/e/e4/FAST_NUCES_logo.png",
    "formula": {
      "matric": 0.10,
      "fsc": 0.40,
      "test": 0.50,
      "testName": "FAST Entry Test / NTS NAT / SAT"
    },
    "requirements": {
      "fscMin": "60% minimum in FSc (Pre-Engineering or ICS with Math)",
      "equivalence": "IBCC Equivalence required for Cambridge stream",
      "testRequirement": "FAST Entry Test or NTS NAT (minimum 85+ score for CS)"
    },
    "scholarships": [
      "FAST Merit Scholarships for Top Rankers",
      "Financial Assistance Study Loans (Interest-Free)",
      "HEC Need-Based Scholarships",
      "PEEF Endowment Funds"
    ],
    "departments": [
      {
        "name": "BS Computer Science (Lahore)",
        "rating": 9.9,
        "closingMerit2025": "74.80%",
        "closingMerit2024": "73.90%",
        "closingMerit2023": "72.80%",
        "closingMerit2022": "71.50%",
        "closingMerit2021": "70.80%"
      },
      {
        "name": "BS Computer Science (Islamabad)",
        "rating": 9.8,
        "closingMerit2025": "73.90%",
        "closingMerit2024": "73.10%",
        "closingMerit2023": "72.00%",
        "closingMerit2022": "70.90%",
        "closingMerit2021": "70.10%"
      },
      {
        "name": "BS Software Engineering (Lahore)",
        "rating": 9.7,
        "closingMerit2025": "73.20%",
        "closingMerit2024": "72.40%",
        "closingMerit2023": "71.50%",
        "closingMerit2022": "70.20%",
        "closingMerit2021": "69.50%"
      },
      {
        "name": "BS Artificial Intelligence (Lahore)",
        "rating": 9.7,
        "closingMerit2025": "74.10%",
        "closingMerit2024": "73.20%",
        "closingMerit2023": "72.10%",
        "closingMerit2022": "70.80%",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Data Science (Lahore)",
        "rating": 9.6,
        "closingMerit2025": "72.80%",
        "closingMerit2024": "71.90%",
        "closingMerit2023": "70.90%",
        "closingMerit2022": "69.50%",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Cyber Security (Lahore)",
        "rating": 9.6,
        "closingMerit2025": "73.50%",
        "closingMerit2024": "72.60%",
        "closingMerit2023": "71.40%",
        "closingMerit2022": "70.10%",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Electrical Engineering (Lahore)",
        "rating": 9.0,
        "closingMerit2025": "58.20%",
        "closingMerit2024": "59.10%",
        "closingMerit2023": "60.00%",
        "closingMerit2022": "61.50%",
        "closingMerit2021": "62.80%"
      },
      {
        "name": "BS Civil Engineering (Lahore)",
        "rating": 8.7,
        "closingMerit2025": "54.50%",
        "closingMerit2024": "55.20%",
        "closingMerit2023": "56.80%",
        "closingMerit2022": "58.00%",
        "closingMerit2021": "59.50%"
      },
      {
        "name": "BS BBA (Lahore)",
        "rating": 9.0,
        "closingMerit2025": "65.40%",
        "closingMerit2024": "64.80%",
        "closingMerit2023": "63.90%",
        "closingMerit2022": "63.00%",
        "closingMerit2021": "62.20%"
      },
      {
        "name": "BS Business Analytics (Lahore)",
        "rating": 9.1,
        "closingMerit2025": "66.80%",
        "closingMerit2024": "65.90%",
        "closingMerit2023": "65.00%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Accounting & Finance (Lahore)",
        "rating": 8.9,
        "closingMerit2025": "63.90%",
        "closingMerit2024": "63.10%",
        "closingMerit2023": "62.40%",
        "closingMerit2022": "61.80%",
        "closingMerit2021": "61.00%"
      },
      {
        "name": "BS Computer Science (Karachi)",
        "rating": 9.5,
        "closingMerit2025": "69.80%",
        "closingMerit2024": "68.90%",
        "closingMerit2023": "67.80%",
        "closingMerit2022": "66.50%",
        "closingMerit2021": "65.80%"
      },
      {
        "name": "BS Software Engineering (Karachi)",
        "rating": 9.4,
        "closingMerit2025": "68.50%",
        "closingMerit2024": "67.80%",
        "closingMerit2023": "66.90%",
        "closingMerit2022": "65.40%",
        "closingMerit2021": "64.80%"
      },
      {
        "name": "BS Artificial Intelligence (Islamabad)",
        "rating": 9.6,
        "closingMerit2025": "73.20%",
        "closingMerit2024": "72.40%",
        "closingMerit2023": "71.20%",
        "closingMerit2022": "70.00%",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Cyber Security (Islamabad)",
        "rating": 9.5,
        "closingMerit2025": "72.80%",
        "closingMerit2024": "71.90%",
        "closingMerit2023": "70.80%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Data Science (Islamabad)",
        "rating": 9.5,
        "closingMerit2025": "72.10%",
        "closingMerit2024": "71.20%",
        "closingMerit2023": "70.10%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Computer Science (Peshawar)",
        "rating": 9.0,
        "closingMerit2025": "62.40%",
        "closingMerit2024": "61.50%",
        "closingMerit2023": "60.80%",
        "closingMerit2022": "59.50%",
        "closingMerit2021": "58.80%"
      },
      {
        "name": "BS Computer Science (Chiniot-Faisalabad)",
        "rating": 8.9,
        "closingMerit2025": "61.80%",
        "closingMerit2024": "60.90%",
        "closingMerit2023": "60.10%",
        "closingMerit2022": "58.90%",
        "closingMerit2021": "58.00%"
      },
      {
        "name": "BS Financial Technology (Lahore)",
        "rating": 9.0,
        "closingMerit2025": "65.10%",
        "closingMerit2024": "64.20%",
        "closingMerit2023": "--",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Software Engineering (Islamabad)",
        "rating": 9.6,
        "closingMerit2025": "72.90%",
        "closingMerit2024": "72.00%",
        "closingMerit2023": "71.10%",
        "closingMerit2022": "70.00%",
        "closingMerit2021": "69.20%"
      }
    ]
  },
  {
    "id": "giki",
    "name": "Ghulam Ishaq Khan Institute of Engineering Sciences & Technology",
    "shortName": "GIKI",
    "city": "Topi, Khyber Pakhtunkhwa",
    "qsRanking": "Asia #401-450 | Premier Private Engineering Institute",
    "overallRating": 9.4,
    "logo": "https://upload.wikimedia.org/wikipedia/en/a/a2/GIK_Institute_Logo.png",
    "formula": {
      "matric": 0.05,
      "fsc": 0.10,
      "test": 0.85,
      "testName": "GIKI Engineering Entrance Test"
    },
    "requirements": {
      "fscMin": "60% minimum marks in FSc Pre-Engineering / Mathematics, Physics, Chemistry/CS",
      "equivalence": "Minimum 3 A-Level subjects with Grade C or better",
      "testRequirement": "Mandatory GIKI Admission Test held across major Pakistan cities"
    },
    "scholarships": [
      "KPK Chief Minister Merit Scholarship",
      "GIKI Alumni Association Need-Based Financial Aid",
      "lhsaas Undergraduate Scholarship Program",
      "Interest-free Student Loan Scheme"
    ],
    "departments": [
      {
        "name": "BS Computer Science",
        "rating": 9.8,
        "closingMerit2025": "Merit Position 180",
        "closingMerit2024": "Merit Position 195",
        "closingMerit2023": "Merit Position 210",
        "closingMerit2022": "Merit Position 225",
        "closingMerit2021": "Merit Position 240"
      },
      {
        "name": "BS Software Engineering",
        "rating": 9.7,
        "closingMerit2025": "Merit Position 290",
        "closingMerit2024": "Merit Position 305",
        "closingMerit2023": "Merit Position 320",
        "closingMerit2022": "Merit Position 340",
        "closingMerit2021": "Merit Position 355"
      },
      {
        "name": "BS Artificial Intelligence",
        "rating": 9.7,
        "closingMerit2025": "Merit Position 220",
        "closingMerit2024": "Merit Position 240",
        "closingMerit2023": "Merit Position 260",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Cyber Security",
        "rating": 9.5,
        "closingMerit2025": "Merit Position 340",
        "closingMerit2024": "Merit Position 360",
        "closingMerit2023": "Merit Position 380",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Data Science",
        "rating": 9.5,
        "closingMerit2025": "Merit Position 310",
        "closingMerit2024": "Merit Position 330",
        "closingMerit2023": "--",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Electrical Engineering (Electronic)",
        "rating": 9.4,
        "closingMerit2025": "Merit Position 680",
        "closingMerit2024": "Merit Position 710",
        "closingMerit2023": "Merit Position 750",
        "closingMerit2022": "Merit Position 790",
        "closingMerit2021": "Merit Position 820"
      },
      {
        "name": "BS Electrical Engineering (Power)",
        "rating": 9.2,
        "closingMerit2025": "Merit Position 820",
        "closingMerit2024": "Merit Position 850",
        "closingMerit2023": "Merit Position 890",
        "closingMerit2022": "Merit Position 920",
        "closingMerit2021": "Merit Position 950"
      },
      {
        "name": "BS Mechanical Engineering",
        "rating": 9.6,
        "closingMerit2025": "Merit Position 520",
        "closingMerit2024": "Merit Position 550",
        "closingMerit2023": "Merit Position 580",
        "closingMerit2022": "Merit Position 620",
        "closingMerit2021": "Merit Position 660"
      },
      {
        "name": "BS Materials Engineering",
        "rating": 9.0,
        "closingMerit2025": "Merit Position 1100",
        "closingMerit2024": "Merit Position 1150",
        "closingMerit2023": "Merit Position 1200",
        "closingMerit2022": "Merit Position 1250",
        "closingMerit2021": "Merit Position 1300"
      },
      {
        "name": "BS Chemical Engineering",
        "rating": 9.1,
        "closingMerit2025": "Merit Position 980",
        "closingMerit2024": "Merit Position 1020",
        "closingMerit2023": "Merit Position 1080",
        "closingMerit2022": "Merit Position 1120",
        "closingMerit2021": "Merit Position 1180"
      },
      {
        "name": "BS Civil Engineering",
        "rating": 9.0,
        "closingMerit2025": "Merit Position 1050",
        "closingMerit2024": "Merit Position 1100",
        "closingMerit2023": "Merit Position 1150",
        "closingMerit2022": "Merit Position 1210",
        "closingMerit2021": "Merit Position 1270"
      },
      {
        "name": "BS Engineering Sciences",
        "rating": 8.9,
        "closingMerit2025": "Merit Position 1250",
        "closingMerit2024": "Merit Position 1300",
        "closingMerit2023": "Merit Position 1350",
        "closingMerit2022": "Merit Position 1400",
        "closingMerit2021": "Merit Position 1450"
      },
      {
        "name": "BS Management Sciences",
        "rating": 8.8,
        "closingMerit2025": "Merit Position 920",
        "closingMerit2024": "Merit Position 960",
        "closingMerit2023": "Merit Position 1010",
        "closingMerit2022": "Merit Position 1050",
        "closingMerit2021": "Merit Position 1100"
      },
      {
        "name": "BS Climate Change & Environmental Engineering",
        "rating": 8.7,
        "closingMerit2025": "Merit Position 1380",
        "closingMerit2024": "--",
        "closingMerit2023": "--",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Nanotechnology Engineering",
        "rating": 8.9,
        "closingMerit2025": "Merit Position 1290",
        "closingMerit2024": "Merit Position 1340",
        "closingMerit2023": "--",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Mechatronics Engineering",
        "rating": 9.2,
        "closingMerit2025": "Merit Position 740",
        "closingMerit2024": "Merit Position 780",
        "closingMerit2023": "Merit Position 810",
        "closingMerit2022": "Merit Position 850",
        "closingMerit2021": "Merit Position 890"
      },
      {
        "name": "BS Artificial Intelligence & Robotics",
        "rating": 9.6,
        "closingMerit2025": "Merit Position 250",
        "closingMerit2024": "--",
        "closingMerit2023": "--",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Industrial Engineering",
        "rating": 8.9,
        "closingMerit2025": "Merit Position 1180",
        "closingMerit2024": "Merit Position 1220",
        "closingMerit2023": "Merit Position 1280",
        "closingMerit2022": "Merit Position 1320",
        "closingMerit2021": "Merit Position 1370"
      },
      {
        "name": "BS Biomedical Engineering",
        "rating": 8.8,
        "closingMerit2025": "Merit Position 1210",
        "closingMerit2024": "Merit Position 1260",
        "closingMerit2023": "Merit Position 1310",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Financial Technology",
        "rating": 8.8,
        "closingMerit2025": "Merit Position 990",
        "closingMerit2024": "--",
        "closingMerit2023": "--",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      }
    ]
  },
  {
    "id": "uet-lahore",
    "name": "University of Engineering & Technology, Lahore",
    "shortName": "UET Lahore",
    "city": "Lahore",
    "qsRanking": "World #801-1000 | Asia #183 (#2 Engineering Public)",
    "overallRating": 9.1,
    "logo": "https://upload.wikimedia.org/wikipedia/en/b/b8/UET_Lahore_Logo.png",
    "formula": {
      "matric": 0.17,
      "fsc": 0.50,
      "test": 0.33,
      "testName": "ECAT (Combined Entrance Test)"
    },
    "requirements": {
      "fscMin": "60% minimum in FSc Pre-Engineering / DAE in relevant technology",
      "equivalence": "IBCC Equivalence with minimum 60% conversion",
      "testRequirement": "Mandatory ECAT conducted by UET Lahore"
    },
    "scholarships": [
      "Punjab Educational Endowment Fund (PEEF)",
      "HEC Need-Based Scholarships",
      "UET Alumni Association Financial Aid",
      "Ehsaas Undergraduate Scholarship Scheme"
    ],
    "departments": [
      {
        "name": "BS Computer Science (Main Campus)",
        "rating": 9.4,
        "closingMerit2025": "83.15%",
        "closingMerit2024": "82.40%",
        "closingMerit2023": "81.50%",
        "closingMerit2022": "80.20%",
        "closingMerit2021": "79.80%"
      },
      {
        "name": "BS Software Engineering (Main Campus)",
        "rating": 9.3,
        "closingMerit2025": "82.50%",
        "closingMerit2024": "81.80%",
        "closingMerit2023": "80.90%",
        "closingMerit2022": "79.60%",
        "closingMerit2021": "79.10%"
      },
      {
        "name": "BS Electrical Engineering (Main Campus)",
        "rating": 9.3,
        "closingMerit2025": "76.40%",
        "closingMerit2024": "77.20%",
        "closingMerit2023": "78.10%",
        "closingMerit2022": "79.30%",
        "closingMerit2021": "80.50%"
      },
      {
        "name": "BS Mechanical Engineering (Main Campus)",
        "rating": 9.3,
        "closingMerit2025": "75.20%",
        "closingMerit2024": "76.10%",
        "closingMerit2023": "77.00%",
        "closingMerit2022": "78.40%",
        "closingMerit2021": "79.80%"
      },
      {
        "name": "BS Civil Engineering (Main Campus)",
        "rating": 9.2,
        "closingMerit2025": "73.80%",
        "closingMerit2024": "74.50%",
        "closingMerit2023": "75.80%",
        "closingMerit2022": "77.10%",
        "closingMerit2021": "78.50%"
      },
      {
        "name": "BS Chemical Engineering (Main Campus)",
        "rating": 9.1,
        "closingMerit2025": "71.50%",
        "closingMerit2024": "72.30%",
        "closingMerit2023": "73.50%",
        "closingMerit2022": "75.00%",
        "closingMerit2021": "76.40%"
      },
      {
        "name": "BS Mechatronics & Control Engineering",
        "rating": 9.1,
        "closingMerit2025": "74.90%",
        "closingMerit2024": "75.80%",
        "closingMerit2023": "76.50%",
        "closingMerit2022": "77.80%",
        "closingMerit2021": "78.90%"
      },
      {
        "name": "BS Industrial & Manufacturing Engineering",
        "rating": 8.9,
        "closingMerit2025": "69.20%",
        "closingMerit2024": "70.10%",
        "closingMerit2023": "71.20%",
        "closingMerit2022": "72.80%",
        "closingMerit2021": "74.10%"
      },
      {
        "name": "BS Petroleum & Gas Engineering",
        "rating": 8.8,
        "closingMerit2025": "68.50%",
        "closingMerit2024": "69.20%",
        "closingMerit2023": "70.50%",
        "closingMerit2022": "72.00%",
        "closingMerit2021": "73.50%"
      },
      {
        "name": "BS Architectural Engineering",
        "rating": 8.9,
        "closingMerit2025": "70.10%",
        "closingMerit2024": "71.00%",
        "closingMerit2023": "72.10%",
        "closingMerit2022": "73.50%",
        "closingMerit2021": "74.80%"
      },
      {
        "name": "B.Architecture",
        "rating": 9.2,
        "closingMerit2025": "77.50%",
        "closingMerit2024": "76.80%",
        "closingMerit2023": "76.00%",
        "closingMerit2022": "75.20%",
        "closingMerit2021": "74.50%"
      },
      {
        "name": "BS Environmental Engineering",
        "rating": 8.7,
        "closingMerit2025": "66.40%",
        "closingMerit2024": "67.20%",
        "closingMerit2023": "68.50%",
        "closingMerit2022": "70.00%",
        "closingMerit2021": "71.20%"
      },
      {
        "name": "BS Metallurgical & Materials Engineering",
        "rating": 8.8,
        "closingMerit2025": "67.10%",
        "closingMerit2024": "68.00%",
        "closingMerit2023": "69.20%",
        "closingMerit2022": "70.50%",
        "closingMerit2021": "72.00%"
      },
      {
        "name": "BS Mining Engineering",
        "rating": 8.5,
        "closingMerit2025": "62.80%",
        "closingMerit2024": "63.50%",
        "closingMerit2023": "64.80%",
        "closingMerit2022": "66.20%",
        "closingMerit2021": "67.80%"
      },
      {
        "name": "BS Geological Engineering",
        "rating": 8.5,
        "closingMerit2025": "63.20%",
        "closingMerit2024": "64.00%",
        "closingMerit2023": "65.10%",
        "closingMerit2022": "66.50%",
        "closingMerit2021": "68.00%"
      },
      {
        "name": "BS Polymer Engineering (KSK Campus)",
        "rating": 8.6,
        "closingMerit2025": "64.50%",
        "closingMerit2024": "65.20%",
        "closingMerit2023": "66.40%",
        "closingMerit2022": "67.90%",
        "closingMerit2021": "69.10%"
      },
      {
        "name": "BS Biomedical Engineering (KSK Campus)",
        "rating": 8.9,
        "closingMerit2025": "72.10%",
        "closingMerit2024": "71.40%",
        "closingMerit2023": "70.50%",
        "closingMerit2022": "69.80%",
        "closingMerit2021": "69.00%"
      },
      {
        "name": "BS Computer Science (KSK Campus)",
        "rating": 9.1,
        "closingMerit2025": "80.40%",
        "closingMerit2024": "79.60%",
        "closingMerit2023": "78.80%",
        "closingMerit2022": "77.50%",
        "closingMerit2021": "76.90%"
      },
      {
        "name": "BS Data Science (Main Campus)",
        "rating": 9.2,
        "closingMerit2025": "81.90%",
        "closingMerit2024": "81.00%",
        "closingMerit2023": "80.10%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Cyber Security (Main Campus)",
        "rating": 9.2,
        "closingMerit2025": "82.10%",
        "closingMerit2024": "81.30%",
        "closingMerit2023": "--",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      }
    ]
  },
  {
    "id": "comsats",
    "name": "COMSATS University Islamabad",
    "shortName": "COMSATS",
    "city": "Islamabad / Lahore",
    "qsRanking": "World #651-700 | Asia #137 (#1 IT Output)",
    "overallRating": 9.2,
    "logo": "https://upload.wikimedia.org/wikipedia/en/e/e2/COMSATS_University_Islamabad_logo.png",
    "formula": {
      "matric": 0.10,
      "fsc": 0.40,
      "test": 0.50,
      "testName": "NTS NAT (National Aptitude Test)"
    },
    "requirements": {
      "fscMin": "60% minimum in FSc (50% for non-engineering BS degree programs)",
      "equivalence": "IBCC conversion certificate required for A-Level",
      "testRequirement": "Mandatory NTS NAT Test (Special or General NAT)"
    },
    "scholarships": [
      "COMSATS Endowment Fund (CEF)",
      "HEC Need-Based Scholarship Program",
      "PEEF Scholarships for Punjab domicile students",
      "Qarz-e-Hasna Financial Assistance"
    ],
    "departments": [
      {
        "name": "BS Computer Science (Islamabad)",
        "rating": 9.6,
        "closingMerit2025": "87.80%",
        "closingMerit2024": "86.90%",
        "closingMerit2023": "85.80%",
        "closingMerit2022": "84.50%",
        "closingMerit2021": "83.80%"
      },
      {
        "name": "BS Software Engineering (Islamabad)",
        "rating": 9.5,
        "closingMerit2025": "86.50%",
        "closingMerit2024": "85.60%",
        "closingMerit2023": "84.70%",
        "closingMerit2022": "83.40%",
        "closingMerit2021": "82.60%"
      },
      {
        "name": "BS Computer Science (Lahore)",
        "rating": 9.5,
        "closingMerit2025": "86.20%",
        "closingMerit2024": "85.30%",
        "closingMerit2023": "84.20%",
        "closingMerit2022": "83.00%",
        "closingMerit2021": "82.10%"
      },
      {
        "name": "BS Software Engineering (Lahore)",
        "rating": 9.4,
        "closingMerit2025": "85.10%",
        "closingMerit2024": "84.20%",
        "closingMerit2023": "83.10%",
        "closingMerit2022": "82.00%",
        "closingMerit2021": "81.20%"
      },
      {
        "name": "BS Artificial Intelligence (Islamabad)",
        "rating": 9.5,
        "closingMerit2025": "86.90%",
        "closingMerit2024": "85.80%",
        "closingMerit2023": "84.50%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Data Science (Islamabad)",
        "rating": 9.4,
        "closingMerit2025": "85.40%",
        "closingMerit2024": "84.50%",
        "closingMerit2023": "83.60%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Electrical Engineering (Islamabad)",
        "rating": 9.1,
        "closingMerit2025": "70.20%",
        "closingMerit2024": "71.10%",
        "closingMerit2023": "72.50%",
        "closingMerit2022": "74.00%",
        "closingMerit2021": "75.20%"
      },
      {
        "name": "BS Computer Engineering (Islamabad)",
        "rating": 9.2,
        "closingMerit2025": "78.50%",
        "closingMerit2024": "77.80%",
        "closingMerit2023": "76.90%",
        "closingMerit2022": "76.00%",
        "closingMerit2021": "75.10%"
      },
      {
        "name": "BS Mechanical Engineering (Sahiwal)",
        "rating": 8.6,
        "closingMerit2025": "61.20%",
        "closingMerit2024": "62.00%",
        "closingMerit2023": "63.20%",
        "closingMerit2022": "64.80%",
        "closingMerit2021": "66.00%"
      },
      {
        "name": "BS Chemical Engineering (Lahore)",
        "rating": 8.8,
        "closingMerit2025": "63.80%",
        "closingMerit2024": "64.50%",
        "closingMerit2023": "65.80%",
        "closingMerit2022": "67.10%",
        "closingMerit2021": "68.50%"
      },
      {
        "name": "BS BBA (Islamabad)",
        "rating": 9.0,
        "closingMerit2025": "72.40%",
        "closingMerit2024": "71.50%",
        "closingMerit2023": "70.80%",
        "closingMerit2022": "70.00%",
        "closingMerit2021": "69.20%"
      },
      {
        "name": "BS Accounting & Finance (Islamabad)",
        "rating": 8.9,
        "closingMerit2025": "71.10%",
        "closingMerit2024": "70.20%",
        "closingMerit2023": "69.50%",
        "closingMerit2022": "68.80%",
        "closingMerit2021": "68.00%"
      },
      {
        "name": "BS Cyber Security (Lahore)",
        "rating": 9.4,
        "closingMerit2025": "85.20%",
        "closingMerit2024": "84.10%",
        "closingMerit2023": "83.00%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "B.Architecture (Islamabad)",
        "rating": 9.1,
        "closingMerit2025": "78.20%",
        "closingMerit2024": "77.50%",
        "closingMerit2023": "76.80%",
        "closingMerit2022": "76.00%",
        "closingMerit2021": "75.20%"
      },
      {
        "name": "BS Psychology (Islamabad)",
        "rating": 8.8,
        "closingMerit2025": "73.50%",
        "closingMerit2024": "72.60%",
        "closingMerit2023": "71.80%",
        "closingMerit2022": "70.90%",
        "closingMerit2021": "70.00%"
      },
      {
        "name": "BS English (Islamabad)",
        "rating": 8.5,
        "closingMerit2025": "68.20%",
        "closingMerit2024": "67.40%",
        "closingMerit2023": "66.50%",
        "closingMerit2022": "65.80%",
        "closingMerit2021": "65.00%"
      },
      {
        "name": "BS Mathematics (Islamabad)",
        "rating": 8.7,
        "closingMerit2025": "64.50%",
        "closingMerit2024": "63.80%",
        "closingMerit2023": "63.00%",
        "closingMerit2022": "62.20%",
        "closingMerit2021": "61.50%"
      },
      {
        "name": "BS Physics (Islamabad)",
        "rating": 8.8,
        "closingMerit2025": "66.10%",
        "closingMerit2024": "65.20%",
        "closingMerit2023": "64.50%",
        "closingMerit2022": "63.80%",
        "closingMerit2021": "63.00%"
      },
      {
        "name": "BS Biosciences (Islamabad)",
        "rating": 8.9,
        "closingMerit2025": "70.80%",
        "closingMerit2024": "69.90%",
        "closingMerit2023": "69.00%",
        "closingMerit2022": "68.20%",
        "closingMerit2021": "67.50%"
      },
      {
        "name": "BS Economics (Lahore)",
        "rating": 8.7,
        "closingMerit2025": "67.40%",
        "closingMerit2024": "66.50%",
        "closingMerit2023": "65.80%",
        "closingMerit2022": "65.00%",
        "closingMerit2021": "64.20%"
      }
    ]
  },
  {
    "id": "lums",
    "name": "Lahore University of Management Sciences",
    "shortName": "LUMS",
    "city": "Lahore",
    "qsRanking": "World #601-650 | Asia #116 (#1 Business in Pakistan)",
    "overallRating": 9.8,
    "logo": "https://upload.wikimedia.org/wikipedia/en/1/12/LUMS_Logo.png",
    "formula": {
      "matric": 0.20,
      "fsc": 0.30,
      "test": 0.50,
      "testName": "SAT I / LCAT + SBASSE Scientific Aptitude Test"
    },
    "requirements": {
      "fscMin": "70% in FSc / Minimum 2 As and 1 B in A-Levels",
      "equivalence": "Mandatory IBCC Equivalence Certificate",
      "testRequirement": "Mandatory SAT I (1350+ recommended) or LCAT + SSE Test for Science/Engineering"
    },
    "scholarships": [
      "National Outreach Programme (NOP) - 100% Fully Funded",
      "LUMS Merit Scholarship for Top Academic Performers",
      "Financial Aid Interest-Free Loan Program"
    ],
    "departments": [
      {
        "name": "BS Computer Science (SBASSE)",
        "rating": 9.9,
        "closingMerit2025": "Holistic (1420+ SAT)",
        "closingMerit2024": "Holistic (1400+ SAT)",
        "closingMerit2023": "Holistic (1380+ SAT)",
        "closingMerit2022": "Holistic (1360+ SAT)",
        "closingMerit2021": "Holistic (1350+ SAT)"
      },
      {
        "name": "BS Electrical Engineering (SBASSE)",
        "rating": 9.6,
        "closingMerit2025": "Holistic (1360+ SAT)",
        "closingMerit2024": "Holistic (1350+ SAT)",
        "closingMerit2023": "Holistic (1330+ SAT)",
        "closingMerit2022": "Holistic (1320+ SAT)",
        "closingMerit2021": "Holistic (1300+ SAT)"
      },
      {
        "name": "BS Chemical Engineering (SBASSE)",
        "rating": 9.3,
        "closingMerit2025": "Holistic (1320+ SAT)",
        "closingMerit2024": "Holistic (1300+ SAT)",
        "closingMerit2023": "Holistic (1280+ SAT)",
        "closingMerit2022": "Holistic (1270+ SAT)",
        "closingMerit2021": "Holistic (1250+ SAT)"
      },
      {
        "name": "BS Mathematics (SBASSE)",
        "rating": 9.4,
        "closingMerit2025": "Holistic (1310+ SAT)",
        "closingMerit2024": "Holistic (1300+ SAT)",
        "closingMerit2023": "Holistic (1280+ SAT)",
        "closingMerit2022": "Holistic (1260+ SAT)",
        "closingMerit2021": "Holistic (1250+ SAT)"
      },
      {
        "name": "BS Physics (SBASSE)",
        "rating": 9.3,
        "closingMerit2025": "Holistic (1300+ SAT)",
        "closingMerit2024": "Holistic (1290+ SAT)",
        "closingMerit2023": "Holistic (1270+ SAT)",
        "closingMerit2022": "Holistic (1250+ SAT)",
        "closingMerit2021": "Holistic (1240+ SAT)"
      },
      {
        "name": "BS Biology (SBASSE)",
        "rating": 9.2,
        "closingMerit2025": "Holistic (1290+ SAT)",
        "closingMerit2024": "Holistic (1280+ SAT)",
        "closingMerit2023": "Holistic (1260+ SAT)",
        "closingMerit2022": "Holistic (1250+ SAT)",
        "closingMerit2021": "Holistic (1230+ SAT)"
      },
      {
        "name": "BSc (Hons) Accounting & Finance (SDSB)",
        "rating": 9.9,
        "closingMerit2025": "Holistic (1400+ SAT)",
        "closingMerit2024": "Holistic (1390+ SAT)",
        "closingMerit2023": "Holistic (1370+ SAT)",
        "closingMerit2022": "Holistic (1350+ SAT)",
        "closingMerit2021": "Holistic (1340+ SAT)"
      },
      {
        "name": "BSc (Hons) Management Sciences (SDSB)",
        "rating": 9.8,
        "closingMerit2025": "Holistic (1380+ SAT)",
        "closingMerit2024": "Holistic (1370+ SAT)",
        "closingMerit2023": "Holistic (1350+ SAT)",
        "closingMerit2022": "Holistic (1330+ SAT)",
        "closingMerit2021": "Holistic (1320+ SAT)"
      },
      {
        "name": "BSc (Hons) Economics (HSS)",
        "rating": 9.7,
        "closingMerit2025": "Holistic (1360+ SAT)",
        "closingMerit2024": "Holistic (1350+ SAT)",
        "closingMerit2023": "Holistic (1330+ SAT)",
        "closingMerit2022": "Holistic (1310+ SAT)",
        "closingMerit2021": "Holistic (1300+ SAT)"
      },
      {
        "name": "BSc (Hons) Economics & Politics (HSS)",
        "rating": 9.5,
        "closingMerit2025": "Holistic (1340+ SAT)",
        "closingMerit2024": "Holistic (1330+ SAT)",
        "closingMerit2023": "Holistic (1310+ SAT)",
        "closingMerit2022": "Holistic (1290+ SAT)",
        "closingMerit2021": "Holistic (1280+ SAT)"
      },
      {
        "name": "BA-LL.B (Hons) Law (SAHSOL)",
        "rating": 9.8,
        "closingMerit2025": "Holistic + LAT Score",
        "closingMerit2024": "Holistic + LAT Score",
        "closingMerit2023": "Holistic + LAT Score",
        "closingMerit2022": "Holistic + LAT Score",
        "closingMerit2021": "Holistic + LAT Score"
      },
      {
        "name": "BSc (Hons) Political Science (HSS)",
        "rating": 9.2,
        "closingMerit2025": "Holistic (1300+ SAT)",
        "closingMerit2024": "Holistic (1290+ SAT)",
        "closingMerit2023": "Holistic (1270+ SAT)",
        "closingMerit2022": "Holistic (1250+ SAT)",
        "closingMerit2021": "Holistic (1240+ SAT)"
      },
      {
        "name": "BSc (Hons) Anthropology & Sociology (HSS)",
        "rating": 9.0,
        "closingMerit2025": "Holistic (1280+ SAT)",
        "closingMerit2024": "Holistic (1270+ SAT)",
        "closingMerit2023": "Holistic (1250+ SAT)",
        "closingMerit2022": "Holistic (1240+ SAT)",
        "closingMerit2021": "Holistic (1220+ SAT)"
      },
      {
        "name": "BSc (Hons) History (HSS)",
        "rating": 8.9,
        "closingMerit2025": "Holistic (1270+ SAT)",
        "closingMerit2024": "Holistic (1260+ SAT)",
        "closingMerit2023": "Holistic (1240+ SAT)",
        "closingMerit2022": "Holistic (1230+ SAT)",
        "closingMerit2021": "Holistic (1210+ SAT)"
      },
      {
        "name": "BSc (Hons) English (HSS)",
        "rating": 9.0,
        "closingMerit2025": "Holistic (1290+ SAT)",
        "closingMerit2024": "Holistic (1280+ SAT)",
        "closingMerit2023": "Holistic (1260+ SAT)",
        "closingMerit2022": "Holistic (1240+ SAT)",
        "closingMerit2021": "Holistic (1230+ SAT)"
      },
      {
        "name": "BS Chemistry (SBASSE)",
        "rating": 9.1,
        "closingMerit2025": "Holistic (1280+ SAT)",
        "closingMerit2024": "Holistic (1270+ SAT)",
        "closingMerit2023": "Holistic (1250+ SAT)",
        "closingMerit2022": "Holistic (1240+ SAT)",
        "closingMerit2021": "Holistic (1220+ SAT)"
      },
      {
        "name": "BS Economics & Data Science (HSS)",
        "rating": 9.6,
        "closingMerit2025": "Holistic (1370+ SAT)",
        "closingMerit2024": "Holistic (1360+ SAT)",
        "closingMerit2023": "--",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BA (Hons) Comparative Literary Studies",
        "rating": 8.8,
        "closingMerit2025": "Holistic (1250+ SAT)",
        "closingMerit2024": "Holistic (1240+ SAT)",
        "closingMerit2023": "Holistic (1220+ SAT)",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BSc (Hons) Financial Economics",
        "rating": 9.5,
        "closingMerit2025": "Holistic (1360+ SAT)",
        "closingMerit2024": "Holistic (1350+ SAT)",
        "closingMerit2023": "Holistic (1330+ SAT)",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Chemical Engineering & Materials Science",
        "rating": 9.2,
        "closingMerit2025": "Holistic (1310+ SAT)",
        "closingMerit2024": "Holistic (1300+ SAT)",
        "closingMerit2023": "Holistic (1280+ SAT)",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      }
    ]
  },
{
    "id": "pu-lahore",
    "name": "University of the Punjab",
    "shortName": "PU Lahore",
    "city": "Lahore",
    "qsRanking": "World #740-750 | Asia #140 (#1 General Public University)",
    "overallRating": 9.2,
    "logo": "https://upload.wikimedia.org/wikipedia/en/2/29/University_of_the_Punjab_logo.png",
    "formula": {
      "matric": 0.25,
      "fsc": 0.75,
      "test": 0.00,
      "testName": "PU Admission Test (For selective BS programs)"
    },
    "requirements": {
      "fscMin": "60% minimum in FSc Pre-Engineering/ICS for CS/Engineering degrees; 50% for Arts",
      "equivalence": "IBCC Equivalence required for O/A Level applicants",
      "testRequirement": "PU Entry Test required for engineering and computer science programs"
    },
    "scholarships": [
      "PEEF (Punjab Educational Endowment Fund) Master's & Undergraduate",
      "HEC Need-Based Scholarship",
      "PU Merit Scholarships for Top Rankers",
      "Ehsaas Undergraduate Scholarship Scheme"
    ],
    "departments": [
      {
        "name": "BS Computer Science (FCIT - Old Campus)",
        "rating": 9.5,
        "closingMerit2025": "89.40%",
        "closingMerit2024": "88.60%",
        "closingMerit2023": "87.80%",
        "closingMerit2022": "86.50%",
        "closingMerit2021": "85.90%"
      },
      {
        "name": "BS Software Engineering (FCIT - New Campus)",
        "rating": 9.4,
        "closingMerit2025": "88.20%",
        "closingMerit2024": "87.50%",
        "closingMerit2023": "86.90%",
        "closingMerit2022": "85.80%",
        "closingMerit2021": "85.10%"
      },
      {
        "name": "BS Data Science (FCIT)",
        "rating": 9.3,
        "closingMerit2025": "87.50%",
        "closingMerit2024": "86.80%",
        "closingMerit2023": "85.90%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Information Technology (FCIT)",
        "rating": 9.3,
        "closingMerit2025": "86.80%",
        "closingMerit2024": "86.00%",
        "closingMerit2023": "85.20%",
        "closingMerit2022": "84.10%",
        "closingMerit2021": "83.50%"
      },
      {
        "name": "Pharm.D (Faculty of Pharmacy)",
        "rating": 9.6,
        "closingMerit2025": "91.20%",
        "closingMerit2024": "90.50%",
        "closingMerit2023": "89.80%",
        "closingMerit2022": "89.10%",
        "closingMerit2021": "88.50%"
      },
      {
        "name": "BS Chemical Engineering (IEET)",
        "rating": 9.0,
        "closingMerit2025": "76.40%",
        "closingMerit2024": "77.10%",
        "closingMerit2023": "78.00%",
        "closingMerit2022": "79.20%",
        "closingMerit2021": "80.50%"
      },
      {
        "name": "BS Metallurgy & Materials Engineering",
        "rating": 8.7,
        "closingMerit2025": "70.10%",
        "closingMerit2024": "71.00%",
        "closingMerit2023": "72.20%",
        "closingMerit2022": "73.50%",
        "closingMerit2021": "74.80%"
      },
      {
        "name": "BS Electrical Engineering (IET)",
        "rating": 8.9,
        "closingMerit2025": "75.20%",
        "closingMerit2024": "76.00%",
        "closingMerit2023": "77.10%",
        "closingMerit2022": "78.30%",
        "closingMerit2021": "79.50%"
      },
      {
        "name": "BS BBA (Hailey College of Business)",
        "rating": 9.2,
        "closingMerit2025": "84.50%",
        "closingMerit2024": "83.80%",
        "closingMerit2023": "83.00%",
        "closingMerit2022": "82.10%",
        "closingMerit2021": "81.50%"
      },
      {
        "name": "BS Commerce (Hailey College of Commerce)",
        "rating": 9.0,
        "closingMerit2025": "81.20%",
        "closingMerit2024": "80.50%",
        "closingMerit2023": "79.80%",
        "closingMerit2022": "78.90%",
        "closingMerit2021": "78.20%"
      },
      {
        "name": "LL.B 5 Years (University Law College)",
        "rating": 9.5,
        "closingMerit2025": "85.80%",
        "closingMerit2024": "85.00%",
        "closingMerit2023": "84.20%",
        "closingMerit2022": "83.50%",
        "closingMerit2021": "82.90%"
      },
      {
        "name": "BS Biotechnology (CAMB)",
        "rating": 9.1,
        "closingMerit2025": "86.50%",
        "closingMerit2024": "85.80%",
        "closingMerit2023": "85.00%",
        "closingMerit2022": "84.20%",
        "closingMerit2021": "83.50%"
      },
      {
        "name": "BS Biochemistry (School of Biochemistry)",
        "rating": 9.0,
        "closingMerit2025": "85.20%",
        "closingMerit2024": "84.50%",
        "closingMerit2023": "83.80%",
        "closingMerit2022": "83.00%",
        "closingMerit2021": "82.20%"
      },
      {
        "name": "BS Economics (Department of Economics)",
        "rating": 8.8,
        "closingMerit2025": "78.50%",
        "closingMerit2024": "77.80%",
        "closingMerit2023": "77.00%",
        "closingMerit2022": "76.10%",
        "closingMerit2021": "75.50%"
      },
      {
        "name": "BS English Literature",
        "rating": 8.9,
        "closingMerit2025": "80.20%",
        "closingMerit2024": "79.50%",
        "closingMerit2023": "78.80%",
        "closingMerit2022": "78.00%",
        "closingMerit2021": "77.20%"
      },
      {
        "name": "BS Applied Psychology",
        "rating": 8.9,
        "closingMerit2025": "83.40%",
        "closingMerit2024": "82.60%",
        "closingMerit2023": "81.90%",
        "closingMerit2022": "81.00%",
        "closingMerit2021": "80.20%"
      },
      {
        "name": "BS Mass Communication",
        "rating": 8.8,
        "closingMerit2025": "79.10%",
        "closingMerit2024": "78.40%",
        "closingMerit2023": "77.60%",
        "closingMerit2022": "76.80%",
        "closingMerit2021": "76.00%"
      },
      {
        "name": "BS Chemistry (Institute of Chemistry)",
        "rating": 8.9,
        "closingMerit2025": "82.80%",
        "closingMerit2024": "82.00%",
        "closingMerit2023": "81.20%",
        "closingMerit2022": "80.40%",
        "closingMerit2021": "79.60%"
      },
      {
        "name": "BS Physics (Department of Physics)",
        "rating": 8.8,
        "closingMerit2025": "80.50%",
        "closingMerit2024": "79.80%",
        "closingMerit2023": "79.00%",
        "closingMerit2022": "78.10%",
        "closingMerit2021": "77.30%"
      },
      {
        "name": "BS Mathematics (Department of Mathematics)",
        "rating": 8.7,
        "closingMerit2025": "77.80%",
        "closingMerit2024": "77.00%",
        "closingMerit2023": "76.20%",
        "closingMerit2022": "75.40%",
        "closingMerit2021": "74.60%"
      }
    ]
  },
  {
    "id": "ned-karachi",
    "name": "NED University of Engineering and Technology",
    "shortName": "NED UET",
    "city": "Karachi",
    "qsRanking": "Asia #351-400 | Premier Engineering University in Sindh",
    "overallRating": 9.0,
    "logo": "https://upload.wikimedia.org/wikipedia/en/e/e5/NED_University_of_Engineering_and_Technology_logo.png",
    "formula": {
      "matric": 0.10,
      "fsc": 0.40,
      "test": 0.50,
      "testName": "NED Pre-Admission Entry Test"
    },
    "requirements": {
      "fscMin": "60% minimum marks in FSc Pre-Engineering / ICS (with Math)",
      "equivalence": "IBCC Equivalence required for Cambridge background students",
      "testRequirement": "Mandatory NED Entry Test (Passing threshold: 50%)"
    },
    "scholarships": [
      "NED Alumni Association Financial Assistance",
      "Sindh Endowment Fund Scholarships",
      "HEC Need-Based Scholarships",
      "Ehsaas Undergraduate Scholarship Scheme"
    ],
    "departments": [
      {
        "name": "BS Computer Science",
        "rating": 9.4,
        "closingMerit2025": "84.20%",
        "closingMerit2024": "83.50%",
        "closingMerit2023": "82.60%",
        "closingMerit2022": "81.40%",
        "closingMerit2021": "80.80%"
      },
      {
        "name": "BE Software Engineering",
        "rating": 9.3,
        "closingMerit2025": "83.10%",
        "closingMerit2024": "82.40%",
        "closingMerit2023": "81.50%",
        "closingMerit2022": "80.20%",
        "closingMerit2021": "79.60%"
      },
      {
        "name": "BE Electrical Engineering",
        "rating": 9.2,
        "closingMerit2025": "74.50%",
        "closingMerit2024": "75.20%",
        "closingMerit2023": "76.40%",
        "closingMerit2022": "77.80%",
        "closingMerit2021": "78.90%"
      },
      {
        "name": "BE Mechanical Engineering",
        "rating": 9.2,
        "closingMerit2025": "73.20%",
        "closingMerit2024": "74.00%",
        "closingMerit2023": "75.10%",
        "closingMerit2022": "76.50%",
        "closingMerit2021": "77.80%"
      },
      {
        "name": "BE Civil Engineering",
        "rating": 9.3,
        "closingMerit2025": "72.00%",
        "closingMerit2024": "72.80%",
        "closingMerit2023": "74.00%",
        "closingMerit2022": "75.20%",
        "closingMerit2021": "76.50%"
      },
      {
        "name": "BS Cyber Security",
        "rating": 9.2,
        "closingMerit2025": "82.50%",
        "closingMerit2024": "81.80%",
        "closingMerit2023": "80.90%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Artificial Intelligence",
        "rating": 9.3,
        "closingMerit2025": "83.80%",
        "closingMerit2024": "82.90%",
        "closingMerit2023": "81.80%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Data Science",
        "rating": 9.1,
        "closingMerit2025": "81.90%",
        "closingMerit2024": "81.00%",
        "closingMerit2023": "80.10%",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BE Electronics Engineering",
        "rating": 9.0,
        "closingMerit2025": "71.40%",
        "closingMerit2024": "72.20%",
        "closingMerit2023": "73.50%",
        "closingMerit2022": "74.80%",
        "closingMerit2021": "76.00%"
      },
      {
        "name": "BE Computer Systems Engineering",
        "rating": 9.1,
        "closingMerit2025": "78.20%",
        "closingMerit2024": "77.50%",
        "closingMerit2023": "76.80%",
        "closingMerit2022": "75.90%",
        "closingMerit2021": "75.00%"
      },
      {
        "name": "BE Chemical Engineering",
        "rating": 8.9,
        "closingMerit2025": "68.50%",
        "closingMerit2024": "69.20%",
        "closingMerit2023": "70.40%",
        "closingMerit2022": "71.80%",
        "closingMerit2021": "73.00%"
      },
      {
        "name": "BE Biomedical Engineering",
        "rating": 8.8,
        "closingMerit2025": "70.20%",
        "closingMerit2024": "69.50%",
        "closingMerit2023": "68.80%",
        "closingMerit2022": "68.00%",
        "closingMerit2021": "67.20%"
      },
      {
        "name": "BS Management Sciences",
        "rating": 8.6,
        "closingMerit2025": "68.10%",
        "closingMerit2024": "67.40%",
        "closingMerit2023": "66.50%",
        "closingMerit2022": "65.80%",
        "closingMerit2021": "65.00%"
      },
      {
        "name": "B.Architecture",
        "rating": 9.1,
        "closingMerit2025": "76.80%",
        "closingMerit2024": "76.00%",
        "closingMerit2023": "75.20%",
        "closingMerit2022": "74.50%",
        "closingMerit2021": "73.80%"
      },
      {
        "name": "BE Industrial & Manufacturing Engineering",
        "rating": 8.8,
        "closingMerit2025": "66.80%",
        "closingMerit2024": "67.50%",
        "closingMerit2023": "68.80%",
        "closingMerit2022": "70.10%",
        "closingMerit2021": "71.40%"
      },
      {
        "name": "BE Petroleum Engineering",
        "rating": 8.7,
        "closingMerit2025": "65.40%",
        "closingMerit2024": "66.20%",
        "closingMerit2023": "67.50%",
        "closingMerit2022": "68.90%",
        "closingMerit2021": "70.20%"
      },
      {
        "name": "BE Automotive Engineering",
        "rating": 8.7,
        "closingMerit2025": "67.20%",
        "closingMerit2024": "68.00%",
        "closingMerit2023": "69.10%",
        "closingMerit2022": "70.50%",
        "closingMerit2021": "71.80%"
      },
      {
        "name": "BE Telecommunications Engineering",
        "rating": 8.6,
        "closingMerit2025": "66.00%",
        "closingMerit2024": "66.80%",
        "closingMerit2023": "68.00%",
        "closingMerit2022": "69.40%",
        "closingMerit2021": "70.80%"
      },
      {
        "name": "BE Materials Engineering",
        "rating": 8.6,
        "closingMerit2025": "64.80%",
        "closingMerit2024": "65.50%",
        "closingMerit2023": "66.80%",
        "closingMerit2022": "68.10%",
        "closingMerit2021": "69.50%"
      },
      {
        "name": "BE Textile Engineering",
        "rating": 8.4,
        "closingMerit2025": "62.50%",
        "closingMerit2024": "63.20%",
        "closingMerit2023": "64.50%",
        "closingMerit2022": "65.80%",
        "closingMerit2021": "67.00%"
      }
    ]
  },
  {
    "id": "qau-islamabad",
    "name": "Quaid-i-Azam University",
    "shortName": "QAU Islamabad",
    "city": "Islamabad",
    "qsRanking": "World #315 | Asia #42 (#1 General Public University Pakistan)",
    "overallRating": 9.5,
    "logo": "https://upload.wikimedia.org/wikipedia/en/b/b8/Quaid-i-Azam_University_logo.png",
    "formula": {
      "matric": 0.30,
      "fsc": 0.70,
      "test": 0.00,
      "testName": "Direct Academic Merit Formula"
    },
    "requirements": {
      "fscMin": "50% minimum in FSc for Natural/Social Sciences; 60% for CS/Pharmacy",
      "equivalence": "IBCC Conversion Certificate for Cambridge Background",
      "testRequirement": "No entry test for general BS programs; Pharmacy/Law require departmental tests/LAT"
    },
    "scholarships": [
      "QAU Merit Scholarships for Top Performers",
      "HEC Need-Based Financial Assistance",
      "Ehsaas Undergraduate Scholarship Scheme",
      "Pakistan Bait-ul-Mal Financial Assistance"
    ],
    "departments": [
      {
        "name": "BS Computer Science",
        "rating": 9.5,
        "closingMerit2025": "88.50%",
        "closingMerit2024": "87.80%",
        "closingMerit2023": "86.90%",
        "closingMerit2022": "85.80%",
        "closingMerit2021": "85.00%"
      },
      {
        "name": "Pharm.D (Doctor of Pharmacy)",
        "rating": 9.6,
        "closingMerit2025": "90.80%",
        "closingMerit2024": "90.10%",
        "closingMerit2023": "89.40%",
        "closingMerit2022": "88.60%",
        "closingMerit2021": "88.00%"
      },
      {
        "name": "BS Biotechnology",
        "rating": 9.4,
        "closingMerit2025": "87.20%",
        "closingMerit2024": "86.50%",
        "closingMerit2023": "85.80%",
        "closingMerit2022": "84.90%",
        "closingMerit2021": "84.10%"
      },
      {
        "name": "BS Biochemistry",
        "rating": 9.3,
        "closingMerit2025": "85.80%",
        "closingMerit2024": "85.10%",
        "closingMerit2023": "84.30%",
        "closingMerit2022": "83.50%",
        "closingMerit2021": "82.80%"
      },
      {
        "name": "BS Physics",
        "rating": 9.5,
        "closingMerit2025": "83.40%",
        "closingMerit2024": "82.60%",
        "closingMerit2023": "81.80%",
        "closingMerit2022": "80.90%",
        "closingMerit2021": "80.10%"
      },
      {
        "name": "BS Chemistry",
        "rating": 9.3,
        "closingMerit2025": "82.90%",
        "closingMerit2024": "82.10%",
        "closingMerit2023": "81.30%",
        "closingMerit2022": "80.50%",
        "closingMerit2021": "79.80%"
      },
      {
        "name": "BS Mathematics",
        "rating": 9.2,
        "closingMerit2025": "80.50%",
        "closingMerit2024": "79.80%",
        "closingMerit2023": "78.90%",
        "closingMerit2022": "78.00%",
        "closingMerit2021": "77.20%"
      },
      {
        "name": "BS Geophysics",
        "rating": 9.0,
        "closingMerit2025": "76.20%",
        "closingMerit2024": "75.40%",
        "closingMerit2023": "74.50%",
        "closingMerit2022": "73.80%",
        "closingMerit2021": "73.00%"
      },
      {
        "name": "BS International Relations",
        "rating": 9.4,
        "closingMerit2025": "84.80%",
        "closingMerit2024": "84.00%",
        "closingMerit2023": "83.20%",
        "closingMerit2022": "82.40%",
        "closingMerit2021": "81.70%"
      },
      {
        "name": "BS Economics",
        "rating": 9.2,
        "closingMerit2025": "81.50%",
        "closingMerit2024": "80.80%",
        "closingMerit2023": "80.00%",
        "closingMerit2022": "79.10%",
        "closingMerit2021": "78.40%"
      },
      {
        "name": "BS Political Science",
        "rating": 9.0,
        "closingMerit2025": "79.40%",
        "closingMerit2024": "78.60%",
        "closingMerit2023": "77.80%",
        "closingMerit2022": "77.00%",
        "closingMerit2021": "76.20%"
      },
      {
        "name": "BS Psychology",
        "rating": 9.1,
        "closingMerit2025": "82.10%",
        "closingMerit2024": "81.30%",
        "closingMerit2023": "80.50%",
        "closingMerit2022": "79.60%",
        "closingMerit2021": "78.90%"
      },
      {
        "name": "BS Sociology",
        "rating": 8.8,
        "closingMerit2025": "75.80%",
        "closingMerit2024": "75.00%",
        "closingMerit2023": "74.10%",
        "closingMerit2022": "73.20%",
        "closingMerit2021": "72.50%"
      },
      {
        "name": "BS Environmental Sciences",
        "rating": 8.9,
        "closingMerit2025": "77.20%",
        "closingMerit2024": "76.40%",
        "closingMerit2023": "75.50%",
        "closingMerit2022": "74.80%",
        "closingMerit2021": "74.00%"
      },
      {
        "name": "BS Statistics",
        "rating": 8.6,
        "closingMerit2025": "72.40%",
        "closingMerit2024": "71.60%",
        "closingMerit2023": "70.80%",
        "closingMerit2022": "70.00%",
        "closingMerit2021": "69.10%"
      },
      {
        "name": "BS Microbiology",
        "rating": 9.2,
        "closingMerit2025": "84.50%",
        "closingMerit2024": "83.70%",
        "closingMerit2023": "82.90%",
        "closingMerit2022": "82.00%",
        "closingMerit2021": "81.20%"
      },
      {
        "name": "BS Zoology",
        "rating": 8.8,
        "closingMerit2025": "76.50%",
        "closingMerit2024": "75.80%",
        "closingMerit2023": "75.00%",
        "closingMerit2022": "74.10%",
        "closingMerit2021": "73.40%"
      },
      {
        "name": "BS Plant Sciences (Botany)",
        "rating": 8.7,
        "closingMerit2025": "74.80%",
        "closingMerit2024": "74.00%",
        "closingMerit2023": "73.20%",
        "closingMerit2022": "72.40%",
        "closingMerit2021": "71.60%"
      },
      {
        "name": "BS Anthropology",
        "rating": 8.5,
        "closingMerit2025": "71.20%",
        "closingMerit2024": "70.40%",
        "closingMerit2023": "69.60%",
        "closingMerit2022": "68.80%",
        "closingMerit2021": "68.00%"
      },
      {
        "name": "LL.B 5 Years",
        "rating": 9.3,
        "closingMerit2025": "83.20%",
        "closingMerit2024": "82.50%",
        "closingMerit2023": "81.80%",
        "closingMerit2022": "81.00%",
        "closingMerit2021": "80.20%"
      }
    ]
  },
  {
    "id": "aku-karachi",
    "name": "Aga Khan University",
    "shortName": "AKU",
    "city": "Karachi",
    "qsRanking": "World #451-500 | #1 Medical University in Pakistan",
    "overallRating": 9.9,
    "logo": "https://upload.wikimedia.org/wikipedia/en/2/23/Aga_Khan_University_logo.png",
    "formula": {
      "matric": 0.10,
      "fsc": 0.20,
      "test": 0.70,
      "testName": "AKU Admission Test + Multiple Mini Interviews (MMI)"
    },
    "requirements": {
      "fscMin": "60% minimum in FSc Pre-Medical or equivalent O/A-Levels",
      "equivalence": "IBCC Conversion Certificate mandatory for Cambridge stream",
      "testRequirement": "Mandatory AKU Test followed by shortlist interview panels"
    },
    "scholarships": [
      "100% Need-Blind Admission Financial Aid",
      "AKU Merit Scholarship for Academic Excellence",
      "Interest-free Educational Loan Schemes"
    ],
    "departments": [
      {
        "name": "MBBS (Bachelor of Medicine & Bachelor of Surgery)",
        "rating": 10.0,
        "closingMerit2025": "Holistic (Top 100 Shortlist)",
        "closingMerit2024": "Holistic (Top 100 Shortlist)",
        "closingMerit2023": "Holistic (Top 100 Shortlist)",
        "closingMerit2022": "Holistic (Top 100 Shortlist)",
        "closingMerit2021": "Holistic (Top 100 Shortlist)"
      },
      {
        "name": "BSc Nursing (BScN)",
        "rating": 9.7,
        "closingMerit2025": "Holistic Interview Panel",
        "closingMerit2024": "Holistic Interview Panel",
        "closingMerit2023": "Holistic Interview Panel",
        "closingMerit2022": "Holistic Interview Panel",
        "closingMerit2021": "Holistic Interview Panel"
      },
      {
        "name": "Post-RN BScN Nursing",
        "rating": 9.5,
        "closingMerit2025": "Holistic Interview Panel",
        "closingMerit2024": "Holistic Interview Panel",
        "closingMerit2023": "Holistic Interview Panel",
        "closingMerit2022": "Holistic Interview Panel",
        "closingMerit2021": "Holistic Interview Panel"
      },
      {
        "name": "BS Associate Degree in Dental Hygiene",
        "rating": 9.1,
        "closingMerit2025": "Holistic Interview Panel",
        "closingMerit2024": "Holistic Interview Panel",
        "closingMerit2023": "Holistic Interview Panel",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      },
      {
        "name": "BS Human Nutrition and Dietetics",
        "rating": 9.3,
        "closingMerit2025": "Holistic Interview Panel",
        "closingMerit2024": "--",
        "closingMerit2023": "--",
        "closingMerit2022": "--",
        "closingMerit2021": "--"
      }
    ]
  }
];
window.universitiesData = universitiesData;
  