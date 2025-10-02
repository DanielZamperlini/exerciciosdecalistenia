import { Dumbbell, Users } from 'lucide-react';

export type Exercise = {
  id: string;
  name: string;
  sets: number;
  reps: number;
  videoId: string;
  type: 'gym' | 'calisthenics' | 'core' | 'mobility' | 'recovery' | 'cardio';
  description?: string;
};

export type WorkoutDay = {
  id: string;
  name: string;
  coverImage: string;
  exercises: Exercise[];
};

export type Profile = {
  id: 'male' | 'female';
  name: string;
  icon: typeof Users | typeof Dumbbell;
  workouts: WorkoutDay[];
};

export const profiles: Profile[] = [
  {
    id: 'male',
    name: 'Masculino',
    icon: Dumbbell,
    workouts: [
      {
        id: 'dia1',
        name: 'Dia 1 - Mobilidade Global + Core Funcional',
        coverImage:
          'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop',
        exercises: [
          {
            id: 'm1',
            name: 'Dead Bug com faixa',
            sets: 3,
            reps: 10,
            type: 'core',
            videoId: '4XLEnwUr1d8?si=V4l0mErgdjvr5XPc',
            description:
              'Fortalece o core e estabiliza a pelve, aliviando sobrecarga no joelho.',
          },
          {
            id: 'm2',
            name: 'Prancha com toque nos ombros',
            sets: 3,
            reps: 30,
            type: 'calisthenics',
            videoId: 'qNRqGqESAWU',
            description:
              'Mantenha prancha estável tocando ombros alternadamente.',
          },
          {
            id: 'm3',
            name: 'Mobilidade torácica em quadrupedia',
            sets: 2,
            reps: 10,
            type: 'mobility',
            videoId: 'AzCghjjWt5k?si=9LFV0wFx3kj6SZq_',
            description:
              'Ativação da coluna e costas altas com controle de rotação.',
          },
          {
            id: 'm4',
            name: 'Alongamento 90/90',
            sets: 2,
            reps: 30,
            type: 'mobility',
            videoId: 'N5bkvG_rnzc',
            description:
              'Melhora a mobilidade do quadril em rotação interna e externa.',
          },
          {
            id: 'm5',
            name: 'Círculos de tornozelo e quadril (CARs)',
            sets: 2,
            reps: 8,
            type: 'mobility',
            videoId: 'hvA3cHvGnc8',
            description:
              'Movimentos articulares controlados em amplitude total.',
          },
          {
            id: 'm6',
            name: 'Flexão com rotação',
            sets: 3,
            reps: 12,
            type: 'calisthenics',
            videoId: 'Bgam9Uop-po',
            description: 'Após flexão, gire o tronco e eleve o braço.',
          },
        ],
      },
      {
        id: 'dia2',
        name: 'Dia 2 - Força Inferior e Joelho Estável',
        coverImage:
          'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop',
        exercises: [
          {
            id: 'm7',
            name: 'Agachamento com pausa isométrica',
            sets: 3,
            reps: 12,
            type: 'calisthenics',
            videoId: 'JvzJAfZ-B8c',
            description: 'Desça até 90° e segure 3s antes de subir.',
          },
          {
            id: 'm8',
            name: 'Pistol squat assistido',
            sets: 3,
            reps: 8,
            type: 'calisthenics',
            videoId: '2jGHhtD3oDk',
            description:
              'Use apoio para manter o equilíbrio e ativar profundamente o joelho.',
          },
          {
            id: 'm9',
            name: 'Ponte de glúteo unilateral',
            sets: 3,
            reps: 12,
            type: 'calisthenics',
            videoId: 'pMDzP-JWnOY',
            description: 'Fortalece glúteos e estabiliza a pelve.',
          },
          {
            id: 'm10',
            name: 'Elevação de panturrilha com isometria',
            sets: 3,
            reps: 12,
            type: 'calisthenics',
            videoId: 'gwLzBJYoWlI',
            description: 'Foco no equilíbrio e controle de tornozelo/joelho.',
          },
          {
            id: 'm11',
            name: 'Mobilidade de tornozelo na parede',
            sets: 2,
            reps: 10,
            type: 'mobility',
            videoId: 'LE01YzJH5ac',
            description: 'Melhora dorsiflexão e reduz tensão nos joelhos.',
          },
          {
            id: 'm12',
            name: 'Alongamento de isquiotibiais dinâmico',
            sets: 2,
            reps: 10,
            type: 'mobility',
            videoId: 'l70UhhNalqA',
            description: 'Alongue posterior de coxa com movimento controlado.',
          },
        ],
      },
      {
        id: 'dia3',
        name: 'Dia 3 - Cardio Leve + Coordenação & Mobilidade',
        coverImage:
          'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop',
        exercises: [
          {
            id: 'm13',
            name: 'Corrida estacionária com joelhos altos',
            sets: 3,
            reps: 60,
            type: 'calisthenics',
            videoId: 'pvLUTrZFvi4',
            description:
              'Simule corrida rápida elevando os joelhos, sem impacto forte.',
          },
          {
            id: 'm14',
            name: 'Step-up com controle',
            sets: 3,
            reps: 15,
            type: 'calisthenics',
            videoId: 'k1f5xShoYys',
            description: 'Suba devagar com ativação e descida suave.',
          },
          {
            id: 'm15',
            name: 'Cossack Squat lento',
            sets: 3,
            reps: 10,
            type: 'mobility',
            videoId: 'r3WvId1XgYs',
            description:
              'Agachamento lateral profundo com mobilidade controlada.',
          },
          {
            id: 'm16',
            name: 'Shell stretch com rotação',
            sets: 2,
            reps: 10,
            type: 'mobility',
            videoId: 'e1ZxRLV6h0Y',
            description: 'Alongamento ativo de quadril e coluna torácica.',
          },
          {
            id: 'm17',
            name: 'Mobilidade com bastão (ombro e coluna)',
            sets: 2,
            reps: 12,
            type: 'mobility',
            videoId: 'OPK2nY1gJdE',
            description: 'Ajuda na amplitude do ombro e mobilidade torácica.',
          },
          {
            id: 'm18',
            name: 'Russian Twist com Haltere',
            sets: 3,
            reps: 20,
            type: 'gym',
            videoId: 'Tau0hsW8iR0?si=4zlZdC8D_8dp_sTF',
            description:
              'Gire o tronco alternando lados com haltere próximo ao chão.',
          },
        ],
      },
      {
        id: 'dia4',
        name: 'Dia 4 - Pull + Posterior de Corpo',
        coverImage:
          'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop',
        exercises: [
          {
            id: 'm19',
            name: 'Remada com halteres',
            sets: 3,
            reps: 12,
            type: 'gym',
            videoId: 'roCP6wCXPqo',
            description: 'Postura e contração escapular na puxada.',
          },
          {
            id: 'm20',
            name: 'Superman com pausa',
            sets: 3,
            reps: 15,
            type: 'calisthenics',
            videoId: '9LsIwRS8nwQ',
            description: 'Fortalece lombar e estabiliza o core posterior.',
          },
          {
            id: 'm21',
            name: 'Rosca inversa barra',
            sets: 3,
            reps: 12,
            type: 'gym',
            videoId: 'CUaRRBbRPgA?si=4l0mOyY_SGfDKVPU',
            description:
              'Cotovelos fixos ao lado do corpo, eleve até altura do peito.',
          },
          {
            id: 'm22',
            name: 'Prancha lateral com rotação de tronco',
            sets: 3,
            reps: 15,
            type: 'calisthenics',
            videoId: 'pHqz7Y30qfY?si=zTjV0JZIOD-6knzX',
            description:
              'Em prancha lateral, gire o tronco em direção ao chão.',
          },
          {
            id: 'm23',
            name: 'Abdominal canivete',
            sets: 3,
            reps: 15,
            type: 'calisthenics',
            videoId: 'cm6BadT-cLk?si=RtnswwaYsfMt6SvA',
            description:
              'Eleve pernas e tronco simultaneamente mantendo controle.',
          },
          {
            id: 'm24',
            name: 'Mobilidade escapular (deslizamento na parede)',
            sets: 2,
            reps: 10,
            type: 'mobility',
            videoId: 'qsZ9l3fYOO8',
            description:
              'Deslize os braços na parede mantendo costas encostadas.',
          },
        ],
      },
      {
        id: 'dia5',
        name: 'Dia 5 - Core Intenso + Joelho Protegido',
        coverImage:
          'https://images.unsplash.com/photo-1579758682665-53a1a614eea6?w=1374&auto=format&fit=crop',
        exercises: [
          {
            id: 'm25',
            name: 'Russian Twist com Haltere',
            sets: 4,
            reps: 20,
            type: 'gym',
            videoId: 'izyhHukwLac?si=kmnZL0s_y4VxwYWV',
            description: 'Gire o tronco alternando lados com haltere.',
          },
          {
            id: 'm26',
            name: 'Prancha com elevação de perna',
            sets: 3,
            reps: 15,
            type: 'calisthenics',
            videoId: '9gmJ18FYD80?si=husnk6geYIx7btsL',
            description: 'Eleve uma perna por vez mantendo a prancha firme.',
          },
          {
            id: 'm27',
            name: 'Ponte isométrica de glúteo',
            sets: 3,
            reps: 30,
            type: 'calisthenics',
            videoId: 'MzQqW6hyz8A',
            description:
              'Sustente a ponte no topo ativando glúteo e posterior.',
          },
          {
            id: 'm28',
            name: 'Flexão com joelho ao cotovelo',
            sets: 3,
            reps: 12,
            type: 'calisthenics',
            videoId: 'LYRJQfThtmc',
            description:
              'Durante a flexão, aproxime o joelho ao cotovelo no retorno.',
          },
          {
            id: 'm29',
            name: 'Alongamentos ativos de quadril e posterior',
            sets: 2,
            reps: 8,
            type: 'mobility',
            videoId: 'DRwAk8HoS-A',
            description:
              'Movimente-se dentro da amplitude confortável, sem travar articulações.',
          },
          {
            id: 'm30',
            name: 'Liberação miofascial leve com bola/rolo',
            sets: 1,
            reps: 3,
            type: 'recovery',
            videoId: 'CyMfR0-qeSY',
            description:
              'Foque na lateral da coxa, posterior e glúteo para alívio pós-sessão.',
          },
        ],
      },
    ],
  },
  {
    id: 'female',
    name: 'Feminino',
    icon: Users,
    workouts: [
        {
    id: 'dia1',
    name: 'Dia 1 - Glúteos e Pernas + Core',
    coverImage:
      'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop',
    exercises: [
      {
        id: 'f1',
        name: 'Agachamento sumô com halter',
        sets: 3,
        reps: 12,
        type: 'calisthenics',
        videoId: '3zLZ5Z9Xh4w',
        description:
          'Pés mais afastados que o quadril, pontas voltadas para fora, desça mantendo a postura.',
      },
      {
        id: 'f2',
        name: 'Afundo búlgaro',
        sets: 3,
        reps: 12,
        type: 'calisthenics',
        videoId: '2C-uNgKwPLE',
        description:
          'Apoie o pé de trás em um banco e desça com controle, mantendo o tronco ereto.',
      },
      {
        id: 'f3',
        name: 'Glute bridge com peso',
        sets: 3,
        reps: 15,
        type: 'calisthenics',
        videoId: '8bbE64NuDTU',
        description:
          'Deitada, apoie o peso sobre o quadril e eleve até contrair os glúteos.',
      },
      {
        id: 'f4',
        name: 'Abdução de quadril em quatro apoios',
        sets: 3,
        reps: 15,
        type: 'calisthenics',
        videoId: 'Zp7vZzU6ZzY',
        description:
          'Em quatro apoios, eleve a perna lateralmente com controle e contração de glúteo.',
      },
      {
        id: 'f5',
        name: 'Abdominal bicicleta',
        sets: 3,
        reps: 20,
        type: 'core',
        videoId: '9FGilxCbdz8',
        description:
          'Deitada, simule pedalar tocando o cotovelo no joelho oposto alternadamente.',
      },
    ],
  },
  {
    id: 'dia2',
    name: 'Dia 2 - Superiores + Core',
    coverImage:
      'https://images.unsplash.com/photo-1594737625785-c5f636c8d7e6?w=800&auto=format&fit=crop',
    exercises: [
      {
        id: 'f6',
        name: 'Desenvolvimento com halteres',
        sets: 3,
        reps: 12,
        type: 'calisthenics',
        videoId: 'qEwKCR5JCog',
        description:
          'Sentada, empurre os halteres acima da cabeça mantendo os cotovelos alinhados.',
      },
      {
        id: 'f7',
        name: 'Rosca alternada com halteres',
        sets: 3,
        reps: 12,
        type: 'calisthenics',
        videoId: 'av7-8igSXTs',
        description:
          'Flexione os cotovelos alternadamente com halteres, mantendo os braços próximos ao corpo.',
      },
      {
        id: 'f8',
        name: 'Tríceps mergulho no banco',
        sets: 3,
        reps: 15,
        type: 'calisthenics',
        videoId: '0326dy_-CzM',
        description:
          'Apoie as mãos no banco atrás de você e desça com os cotovelos flexionados.',
      },
      {
        id: 'f9',
        name: 'Remada unilateral com halter',
        sets: 3,
        reps: 12,
        type: 'calisthenics',
        videoId: 'pYcpY20QaE8',
        description:
          'Apoie um joelho no banco e puxe o halter com o braço oposto em direção ao abdômen.',
      },
      {
        id: 'f10',
        name: 'Prancha com toque de ombro',
        sets: 3,
        reps: 30,
        type: 'core',
        videoId: 'R0mMyV5OtcM',
        description:
          'Na posição de prancha, toque alternadamente os ombros com a mão oposta sem balançar o quadril.',
      },
    ],
  },
  {
    id: 'dia3',
    name: 'Dia 3 - Funcional + Core',
    coverImage:
      'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&auto=format&fit=crop',
    exercises: [
      {
        id: 'f11',
        name: 'Agachamento com salto',
        sets: 3,
        reps: 10,
        type: 'cardio',
        videoId: 'U4s4mEQ5VqU',
        description:
          'Agache e salte explosivamente, aterrissando suavemente com controle.',
      },
      {
        id: 'f12',
        name: 'Step-up com joelho elevado',
        sets: 3,
        reps: 12,
        type: 'calisthenics',
        videoId: 'dQqApCGd5Ss',
        description:
          'Suba em um banco e eleve o joelho da perna oposta ao final do movimento.',
      },
      {
        id: 'f13',
        name: 'Escalador',
        sets: 3,
        reps: 30,
        type: 'cardio',
        videoId: 'nmwgirgXLYM',
        description:
          'Na posição de prancha, leve os joelhos alternadamente ao peito em ritmo acelerado.',
      },
      {
        id: 'f14',
        name: 'Afundo com passada',
        sets: 3,
        reps: 20,
        type: 'calisthenics',
        videoId: 'QOVaHwm-Q6U',
        description:
          'Dê passos alternados afundando o corpo com controle e postura ereta.',
      },
      {
        id: 'f15',
        name: 'Prancha com rotação de tronco',
        sets: 3,
        reps: 10,
        type: 'core',
        videoId: 'K3y2xHf9s9Y',
        description:
          'Na prancha, gire o tronco tocando o chão com a mão, alternando os lados.',
      },
    ],
  },

    ],
  },
];
