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
        id: "dia1",
        name: "Dia 1 - Peito e Tríceps",
        coverImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m1",
            name: "Flexões",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "IODxDxX7oi4",
            description: "Se ficar fácil, faça variações mais difíceis, como flexão com os pés elevados."
          },
          {
            id: "m2",
            name: "Mergulho (Dips)",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "2z8JmcrW-As",
            description: "Para intensificar, coloque peso sobre as pernas (ex.: mochila com livros)."
          },
          {
            id: "m3",
            name: "Supino com Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "qEwKCR5JCog",
            description: "Foque em subir os halteres até a completa extensão dos braços."
          },
          {
            id: "m4",
            name: "Tríceps Testa com Halteres",
            sets: 3,
            reps: 15,
            type: "gym",
            videoId: "ir5PsbniVSc",
            description: "Deitado, segure os halteres e desça-os em direção à testa."
          },
          {
            id: "m5",
            name: "Flexão Diamante",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "PAauHMIhWKg?si=gCDt7B3359-pVjjp",
            description: "Mantenha as mãos próximas, formando um diamante com os dedos."
          },
          {
            id: "m6",
            name: "Alongamento com Faixa Elástica para Peitoral",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "BJbecSYWQRg?si=cqSHa4WbGNBWnj6D",
            description: "Segure a faixa elástica e estique os braços para alongar o peitoral."
          }
        ]
      },
      {
        id: "dia2",
        name: "Dia 2 - Pernas",
        coverImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m7",
            name: "Agachamento Livre",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "WLw3eRGkM5U?si=MIdg7Ju2laNr4tk0",
            description: "Segure os halteres para aumentar a intensidade."
          },
          {
            id: "m8",
            name: "Avanço (Lunge) com Halteres",
            sets: 3,
            reps: 15,
            type: "gym",
            videoId: "6Zz_RG0EHFE?si=jHALxI0GcpDTcXc9",
            description: "Mantenha o tronco ereto e o joelho da frente alinhado com o pé."
          },
          {
            id: "m9",
            name: "Levantamento Terra Romana com Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "jSomWOwLiGE?si=CVYN8iifgsZhWY4D",
            description: "Deixe a barra reta aos pés, ombros para trás e joelho levemente flexionado."
          },
          {
            id: "m10",
            name: "Step Up Banco com Flexão de Quadril",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "k1f5xShoYys?si=936Lmc0w2rgIxNcv",
            description: "Eleve a perna até a completa extensão dos glúteos."
          },
          {
            id: "m11",
            name: "Panturrilhas em Pé",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "cklp_Xh5V8M?si=HbY5mRo-4P9vUlOC",
            description: "Segure os halteres para aumentar a carga."
          },
          {
            id: "m12",
            name: "Passada Lateral Agachado",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "kjlFQeJP5fo?si=nRlZuNTpP4mtd9lu",
            description: "com ou sem a faixa elástica, faça o agachamento e caminhe para as laterais."
          }
        ]
      },
      {
        id: "dia3",
        name: "Dia 3 - Costas e Bíceps",
        coverImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m13",
            name: "Barra Fixa",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "eGo4IYlbE5g",
            description: "Se for fácil, segure um haltere entre os pés para aumentar a carga."
          },
          {
            id: "m14",
            name: "Remada Curvada com Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "roCP6wCXPqo",
            description: "Mantenha as costas retas e puxe os halteres em direção ao abdômen."
          },
          {
            id: "m15",
            name: "Rosca Direta com Halteres",
            sets: 3,
            reps: 15,
            type: "gym",
            videoId: "kwG2ipFRgfo",
            description: "Foque na contração total do bíceps no topo do movimento."
          },
          {
            id: "m16",
            name: "Prancha (Plank)",
            sets: 3,
            reps: 1,
            type: "calisthenics",
            videoId: "qNRqGqESAWU?si=hwX6ym-jqQZ_817Y",
            description: "Mantenha a posição por 1 minuto."
          },
          {
            id: "m17",
            name: "Pull Over com Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "vW--lca6Knw?si=_c9kYWukPVXqwL2e",
            description: "Segure os halteres com as mãos viradas para dentro e puxe-os em direção ao queixo."
          },
          {
            id: "m18",
            name: "Remada com Faixa Elástica",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "gN-GTuomHtE?si=XyLcVgSjM11B30dT",
            description: "Puxe a faixa elástica em direção ao abdômen."
          }
        ]
      },
      {
        id: "dia4",
        name: "Dia 4 - Ombros e Abdominais",
        coverImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m19",
            name: "Elevação Lateral com Halteres",
            sets: 3,
            reps: 15,
            type: "gym",
            videoId: "3VcKaXpzqRo",
            description: "Mantenha os cotovelos levemente flexionados e evite balançar o corpo."
          },
          {
            id: "m20",
            name: "Desenvolvimento Militar com Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "qEwKCR5JCog",
            description: "Foque em subir os halteres até a completa extensão dos braços."
          },
          {
            id: "m21",
            name: "Elevação Frontal com Halteres",
            sets: 3,
            reps: 15,
            type: "gym",
            videoId: "xNiyS3b9ERg?si=c-sFrS2Vww2Gt7Nd",
            description: "Eleve os halteres à frente até a altura dos ombros."
          },
          {
            id: "m22",
            name: "Abdominal Bicicleta",
            sets: 3,
            reps: 25,
            type: "calisthenics",
            videoId: "apmprS8H1MY?si=uaOwrF_YEjEPqQZZ",
            description: "Deitado, simule o movimento de pedalar com as pernas."
          },
          {
            id: "m23",
            name: "Abdominal Infra",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "l4kQd9eWclE",
            description: "Deitado, eleve as pernas estendidas até 90 graus e desça lentamente."
          },
          {
            id: "m24",
            name: "Elevação Lateral com Faixa Elástica",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "8QzOpnALwzQ?si=Q43bG8AvprR2A57F",
            description: "Segure a faixa elástica e eleve os braços lateralmente."
          }
        ]
      },
      {
        id: "dia5",
        name: "Dia 5 - Corpo Inteiro (Full Body)",
        coverImage: "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exercises: [
          {
            id: "m25",
            name: "Burpees",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "auBLPXO8Fww?si=ulyu-F0DyysElGAb",
            description: "Combine flexão, salto e agachamento."
          },
          {
            id: "m26",
            name: "Flexões",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "IODxDxX7oi4",
            description: "Se ficar fácil, faça variações mais difíceis, como flexão com os pés elevados."
          },
          {
            id: "m27",
            name: "Agachamento Livre",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "WLw3eRGkM5U?si=MIdg7Ju2laNr4tk0",
            description: "Segure os halteres para aumentar a intensidade."
          },
          {
            id: "m28",
            name: "Prancha (Plank)",
            sets: 3,
            reps: 1,
            type: "calisthenics",
            videoId: "qNRqGqESAWU?si=hwX6ym-jqQZ_817Y",
            description: "Mantenha a posição por 1 minuto."
          },
          {
            id: "m29",
            name: "Barra Fixa",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "eGo4IYlbE5g",
            description: "Se for fácil, segure um haltere entre os pés para aumentar a carga."
          },
          {
            id: "m30",
            name: "mountain climbers",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "bw4lYQ3P-xI?si=WLHadTT94XeoFG5v",
            description: "coloque as duas mãos no chão e leve os pés até a mão alternando-os"
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
        id: "dia1",
        name: "Dia 1 - Pernas e Glúteos",
        coverImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f1",
            name: "Agachamento Livre",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "WLw3eRGkM5U?si=MIdg7Ju2laNr4tk0",
            description: "Segure os halteres para aumentar a intensidade."
          },
          {
            id: "f2",
            name: "Avanço (Lunge)",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "6Zz_RG0EHFE?si=jHALxI0GcpDTcXc9",
            description: "Mantenha o tronco ereto e o joelho da frente alinhado com o pé."
          },
          {
            id: "f3",
            name: "Elevação de Quadril (Hip Thrust)",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "OUgsJ8-Vi0E",
            description: "Eleve o quadril até a completa extensão dos glúteos."
          },
          {
            id: "f4",
            name: "Abdução de Quadril com Faixa Elástica",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "jgh6sGwtTwk",
            description: "Deitada de lado, coloque a faixa elástica acima dos joelhos e eleve a perna de cima."
          },
          {
            id: "f5",
            name: "Ponte de Glúteos",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "OUgsJ8-Vi0E",
            description: "Eleve o quadril até a completa extensão dos glúteos."
          },
          {
            id: "f6",
            name: "Agachamento com Faixa Elástica",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "aclHkVaku9U",
            description: "Coloque a faixa elástica acima dos joelhos e faça o agachamento."
          }
        ]
      },
      {
        id: "dia2",
        name: "Dia 2 - Peito e Tríceps",
        coverImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f7",
            name: "Flexões de Joelhos",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "IODxDxX7oi4",
            description: "Se for difícil, faça com os joelhos apoiados no chão."
          },
          {
            id: "f8",
            name: "Remada curvada com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "roCP6wCXPqo",
            description: "Incline o tronco para frente e puxe os halteres em direção ao abdômen."
          },
          {
            id: "f9",
            name: "Tríceps Testa com Halteres",
            sets: 3,
            reps: 15,
            type: "gym",
            videoId: "ir5PsbniVSc",
            description: "Deitada, segure os halteres e desça-os em direção à testa."
          },
          {
            id: "f10",
            name: "Mergulho em Banco (Dips)",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "2z8JmcrW-As",
            description: "Para intensificar, coloque peso sobre as pernas (ex.: mochila com livros)."
          },
          {
            id: "f11",
            name: "Elevação lateral com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "3VcKaXpzqRo",
            description: "Em pé, eleve os halteres lateralmente até a altura dos ombros."
          },
          {
            id: "f12",
            name: "Alongamento com Faixa Elástica para Peitoral",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "BJbecSYWQRg?si=cqSHa4WbGNBWnj6D",
            description: "Segure a faixa elástica e estique os braços para alongar o peitoral."
          }
        ]
      },
      {
        id: "dia3",
        name: "Dia 3 - Costas e Bíceps",
        coverImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f13",
            name: "Abdominal supra",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "1fbU_MkV7NE",
            description: "Deitada de costas, eleve o tronco em direção aos joelhos."
          },
          {
            id: "f14",
            name: "Elevação de pernas",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "l4kQd9eWclE",
            description: "Deitada de costas, eleve as pernas estendidas até 90 graus e desça lentamente."
          },
          {
            id: "f15",
            name: "Russian twist com haltere",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "wkD8rjkodUI",
            description: "Sentada, incline o tronco para trás e gire o haltere de um lado para o outro."
          },
          {
            id: "f16",
            name: "Prancha com toque no ombro",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "3ZSopTK46bs?si=z-PzKooRAv1dZzs1",
            description: "Em posição de prancha, toque um ombro com a mão oposta, alternando os lados."
          },
          {
            id: "f17",
            name: "Remada com Faixa Elástica",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "gN-GTuomHtE?si=XyLcVgSjM11B30dT",
            description: "Puxe a faixa elástica em direção ao abdômen."
            
          },
          {
            id: "f18",
            name: "Prancha abdominal",
            sets: 3,
            reps: 1,
            type: "calisthenics",
            videoId: "ASdvN_XEl_c",
            description: "Mantenha a posição por 30 segundos a 1 minuto."
            
          }
        ]
      },
      {
        id: "dia4",
        name: "Dia 4 - Glúteos e Pernas",
        coverImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f19",
            name: "Agachamento sumô com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "mOtY705EJYg?si=do5d9hxYM0SIxvNM",
            description: "Pernas afastadas, pontas dos pés apontando para fora, segure um haltere com as duas mãos."
          },
          {
            id: "f20",
            name: "Passada lateral com faixa elástica",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "yBaQptlMXxk?si=ksV6RaRbolep73Gg",
            description: "Coloque a faixa elástica acima dos joelhos e dê passos laterais."
          },
          {
            id: "f21",
            name: "Ponte de glúteos com faixa elástica",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "OUgsJ8-Vi0E",
            description: "Coloque a faixa elástica acima dos joelhos e eleve o quadril."
          },
          {
            id: "f22",
            name: "Abdominal Bicicleta",
            sets: 3,
            reps: 25,
            type: "calisthenics",
            videoId: "apmprS8H1MY?si=uaOwrF_YEjEPqQZZ",
            description: "Deitado, simule o movimento de pedalar com as pernas."
          },
          {
            id: "f23",
            name: "Agachamento búlgaro com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "LT_nelifZ_k?si=C3QXmjizMwqGzFaW",
            description: "Apoie uma perna em uma cadeira e faça o agachamento com a outra perna."
          },
          {
            id: "f24",
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
        id: "dia5",
        name: "Dia 5 - Corpo Inteiro (Full Body)",
        coverImage: "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exercises: [
          {
            id: "f25",
            name: "Burpee",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "dZgVxmf6jkA",
            description: "Combine flexão, salto e agachamento."
          },
          {
            id: "f26",
            name: "Agachamento com elevação de halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "L8fvypPrzzs",
            description: "No final do agachamento, eleve os halteres à frente."
          },
          {
            id: "f27",
            name: "Flexão com rotação",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "Bgam9Uop-po?si=oTDGOrQCCVan4Uh9",
            description: "Após cada flexão, gire o tronco e estenda um braço para o alto."
          },
          {
            id: "f28",
            name: "Prancha com toque no ombro",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "BVVGrefHMvM?si=RAOYybp6y6simhQd",
            description: "Em posição de prancha, toque um ombro com a mão oposta, alternando os lados."
          },
          {
            id: "f29",
            name: "Remada alta com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "NFAEgfUIMFY?si=MroGlCns3eus8E_9",
            description: "Puxe os halteres em direção ao queixo, mantendo os cotovelos altos."
          },
          {
            id: "f30",
            name: "mountain climbers",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "kLh-uczlPLg?si=5M_g3dEDGuSTCD3C",
            description: "coloque as duas mãos no chão e leve os pés até a mão alternando-os"
          }
        ]
      }
    ]
  }
];
