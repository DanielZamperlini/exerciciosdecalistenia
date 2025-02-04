import { Dumbbell, Users } from 'lucide-react';

export type Exercise = {
  id: string;
  name: string;
  sets: number;
  reps: number;
  videoId: string;
  type: 'gym' | 'calisthenics';
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
        id: "segunda",
        name: "Segunda - Peito, Tríceps e Ombro",
        coverImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m1",
            name: "Flexão de braço",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "IODxDxX7oi4",
            description: "Se ficar fácil, faça variações mais difíceis, como flexão com os pés elevados."
          },
          {
            id: "m2",
            name: "Mergulho em cadeira",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "2z8JmcrW-As",
            description: "Para intensificar, coloque peso sobre as pernas (ex.: mochila com livros)."
          },
          {
            id: "m3",
            name: "Desenvolvimento com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "qEwKCR5JCog",
            description: "Foque em subir os halteres até a completa extensão dos braços."
          },
          {
            id: "m4",
            name: "Crucifixo com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "eozdVDA78K0",
            description: "Controle o movimento na descida para maximizar a tensão no peitoral."
          },
          {
            id: "m5",
            name: "Elevação lateral com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "3VcKaXpzqRo",
            description: "Mantenha os cotovelos levemente flexionados e evite balançar o corpo."
          }
        ]
      },
      {
        id: "terca",
        name: "Terça - Costas e Bíceps",
        coverImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m6",
            name: "Barra fixa",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "eGo4IYlbE5g",
            description: "Se for fácil, segure um haltere entre os pés para aumentar a carga."
          },
          {
            id: "m7",
            name: "Remada curvada com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "roCP6wCXPqo",
            description: "Mantenha as costas retas e puxe os halteres em direção ao abdômen."
          },
          {
            id: "m8",
            name: "Rosca direta com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "kwG2ipFRgfo",
            description: "Foque na contração total do bíceps no topo do movimento."
          },
          {
            id: "m9",
            name: "Puxada alta com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "5rkbzIXLiK8",
            description: "Segure os halteres com as mãos viradas para dentro e puxe-os em direção ao queixo."
          },
          {
            id: "m10",
            name: "Rosca martelo com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "zC3nLlEvin4",
            description: "Mantenha os cotovelos fixos ao lado do corpo."
          }
        ]
      },
      {
        id: "quarta",
        name: "Quarta - Pernas e Glúteos",
        coverImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m11",
            name: "Agachamento livre",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "aclHkVaku9U",
            description: "Segure os halteres para aumentar a intensidade."
          },
          {
            id: "m12",
            name: "Afundo com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "Q59ZvPhpySM",
            description: "Mantenha o tronco ereto e o joelho da frente alinhado com o pé."
          },
          {
            id: "m13",
            name: "Elevação de panturrilha",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "YXc1TdVX5Lw",
            description: "Segure os halteres para aumentar a carga."
          },
          {
            id: "m14",
            name: "Ponte de glúteos com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "OUgsJ8-Vi0E",
            description: "Coloque um haltere sobre o quadril e eleve o glúteo."
          },
          {
            id: "m15",
            name: "Agachamento sumô",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "Z5g6RBJkp8w",
            description: "Foque em abrir bem as pernas e descer até o máximo que conseguir."
          }
        ]
      },
      {
        id: "quinta",
        name: "Quinta - Abdômen e Core",
        coverImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m16",
            name: "Prancha abdominal",
            sets: 3,
            reps: 1,
            type: "calisthenics",
            videoId: "ASdvN_XEl_c",
            description: "Mantenha a posição por 30 segundos a 1 minuto."
          },
          {
            id: "m17",
            name: "Abdominal supra",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "1fbU_MkV7NE",
            description: "Segure um haltere no peito para aumentar a intensidade."
          },
          {
            id: "m18",
            name: "Elevação de pernas",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "l4kQd9eWclE",
            description: "Mantenha as costas pressionadas no chão."
          },
          {
            id: "m19",
            name: "Russian twist com haltere",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "wkD8rjkodUI",
            description: "Gire o tronco com controle."
          },
          {
            id: "m20",
            name: "Mountain climber",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "nmwgirgXLYM",
            description: "Faça o movimento de forma rápida e controlada."
          }
        ]
      },
      {
        id: "sexta",
        name: "Sexta - Full Body",
        coverImage: "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exercises: [
          {
            id: "m21",
            name: "Burpee",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "dZgVxmf6jkA",
            description: "Combine flexão, salto e agachamento."
          },
          {
            id: "m22",
            name: "Agachamento com elevação de halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "L8fvypPrzzs",
            description: "No final do agachamento, eleve os halteres à frente."
          },
          {
            id: "m23",
            name: "Flexão com rotação",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "YU0gWh8ZRhU",
            description: "Após cada flexão, gire o tronco e estenda um braço para o alto."
          },
          {
            id: "m24",
            name: "Remada alta com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "5rkbzIXLiK8",
            description: "Puxe os halteres em direção ao queixo, mantendo os cotovelos altos."
          },
          {
            id: "m25",
            name: "Prancha com toque no ombro",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "QOCn3_UoF_4",
            description: "Em posição de prancha, toque um ombro com a mão oposta, alternando os lados."
          }
        ]
      }
    ]
  },
  {
    id: 'female',
    name: 'Feminino',
    icon: Users,
    workouts: [
      {
        id: "segunda",
        name: "Segunda - Glúteos e Pernas",
        coverImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f1",
            name: "Agachamento com faixa elástica",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "aclHkVaku9U",
            description: "Coloque a faixa elástica acima dos joelhos e faça o agachamento."
          },
          {
            id: "f2",
            name: "Afundo com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "Q59ZvPhpySM",
            description: "Segure os halteres e dê um passo à frente, descendo o joelho de trás em direção ao chão."
          },
          {
            id: "f3",
            name: "Elevação de quadril com faixa elástica",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "OUgsJ8-Vi0E",
            description: "Deitada de costas, coloque a faixa elástica acima dos joelhos e eleve o quadril."
          },
          {
            id: "f4",
            name: "Abdução de perna com faixa elástica",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "jgh6sGwtTwk",
            description: "Deitada de lado, coloque a faixa elástica acima dos joelhos e eleve a perna de cima."
          },
          {
            id: "f5",
            name: "Elevação de panturrilha",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "YXc1TdVX5Lw",
            description: "Em pé, eleve os calcanhares e desça lentamente."
          }
        ]
      },
      {
        id: "terca",
        name: "Terça - Superiores",
        coverImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f6",
            name: "Flexão de braço",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "IODxDxX7oi4",
            description: "Se for difícil, faça com os joelhos apoiados no chão."
          },
          {
            id: "f7",
            name: "Remada curvada com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "roCP6wCXPqo",
            description: "Incline o tronco para frente e puxe os halteres em direção ao abdômen."
          },
          {
            id: "f8",
            name: "Elevação lateral com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "3VcKaXpzqRo",
            description: "Em pé, eleve os halteres lateralmente até a altura dos ombros."
          },
          {
            id: "f9",
            name: "Tríceps francês com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "ir5PsbniVSc",
            description: "Deitada, segure um haltere com as duas mãos e estenda os braços para cima."
          },
          {
            id: "f10",
            name: "Rosca direta com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "kwG2ipFRgfo",
            description: "Em pé, flexione os cotovelos e eleve os halteres até a altura dos ombros."
          }
        ]
      },
      {
        id: "quarta",
        name: "Quarta - Core e Abdômen",
        coverImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f11",
            name: "Prancha abdominal",
            sets: 3,
            reps: 1,
            type: "calisthenics",
            videoId: "ASdvN_XEl_c",
            description: "Mantenha a posição por 30 segundos a 1 minuto."
          },
          {
            id: "f12",
            name: "Abdominal supra",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "1fbU_MkV7NE",
            description: "Deitada de costas, eleve o tronco em direção aos joelhos."
          },
          {
            id: "f13",
            name: "Elevação de pernas",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "l4kQd9eWclE",
            description: "Deitada de costas, eleve as pernas estendidas até 90 graus e desça lentamente."
          },
          {
            id: "f14",
            name: "Russian twist com haltere",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "wkD8rjkodUI",
            description: "Sentada, incline o tronco para trás e gire o haltere de um lado para o outro."
          },
          {
            id: "f15",
            name: "Prancha com toque no ombro",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "QOCn3_UoF_4",
            description: "Em posição de prancha, toque um ombro com a mão oposta, alternando os lados."
          }
        ]
      },
      {
        id: "quinta",
        name: "Quinta - Glúteos e Pernas",
        coverImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f16",
            name: "Agachamento sumô com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "Z5g6RBJkp8w",
            description: "Pernas afastadas, pontas dos pés apontando para fora, segure um haltere com as duas mãos."
          },
          {
            id: "f17",
            name: "Passada lateral com faixa elástica",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "Q59ZvPhpySM",
            description: "Coloque a faixa elástica acima dos joelhos e dê passos laterais."
          },
          {
            id: "f18",
            name: "Ponte de glúteos com faixa elástica",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "OUgsJ8-Vi0E",
            description: "Coloque a faixa elástica acima dos joelhos e eleve o quadril."
          },
          {
            id: "f19",
            name: "Agachamento búlgaro com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "2CjohXwRC9U",
            description: "Apoie uma perna em uma cadeira e faça o agachamento com a outra perna."
          },
          {
            id: "f20",
            name: "Abdução de perna em pé com faixa elástica",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "jgh6sGwtTwk",
            description: "Em pé, coloque a faixa elástica acima dos joelhos e eleve uma perna lateralmente."
          }
        ]
      },
      {
        id: "sexta",
        name: "Sexta - Full Body",
        coverImage: "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exercises: [
          {
            id: "f21",
            name: "Burpee",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "dZgVxmf6jkA",
            description: "Combine flexão, salto e agachamento."
          },
          {
            id: "f22",
            name: "Agachamento com elevação de halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "L8fvypPrzzs",
            description: "No final do agachamento, eleve os halteres à frente."
          },
          {
            id: "f23",
            name: "Flexão com rotação",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "YU0gWh8ZRhU",
            description: "Após cada flexão, gire o tronco e estenda um braço para o alto."
          },
          {
            id: "f24",
            name: "Remada alta com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "5rkbzIXLiK8",
            description: "Puxe os halteres em direção ao queixo, mantendo os cotovelos altos."
          },
          {
            id: "f25",
            name: "Prancha com toque no ombro",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "QOCn3_UoF_4",
            description: "Em posição de prancha, toque um ombro com a mão oposta, alternando os lados."
          }
        ]
      }
    ]
  }
];