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
        name: "Dia 1 - Glúteos e Pernas + Core",
        coverImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f1",
            name: "Agachamento com barra",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "WLw3eRGkM5U?si=MIdg7Ju2laNr4tk0",
            description: "Pés afastados na largura do quadril, desça controladamente."
          },
          {
            id: "f2",
            name: "Afundo com Halteres",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "ALP9JIXA-PA?si=UcR3l1mAv_yBLq9G",
            description: "Segure halteres e dê passos longos, flexionando os joelhos a 90°."
          },
          {
            id: "f3",
            name: "Elevação Pélvica com Barra",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "SY1eYXrCPzg?si=aTDcjhxpGiCtvfpQ",
            description: "Deitada, apoie a barra no quadril e eleve o quadril até contrair glúteos."
          },
          {
            id: "f4",
            name: "Step-Up no Caixote com Halteres",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "iyaLbUtqsgw?si=tgTnPb6zCnk6-AwL",
            description: "Suba no caixote segurando halteres, mantendo o controle, 10 de cada lado."
          },
          {
            id: "f5",
            name: "Ponte de Glúteos",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "0ZTNZ4lYs0I?si=xes-IKgn6hsRfeYC",
            description: "Coloque a faixa acima dos joelhos e eleve o quadril, pressionando contra a resistência."
          },
          {
            id: "f6",
            name: "Prancha com Elevação de Perna",
            sets: 3,
            reps: 1,
            type: "calisthenics",
            videoId: "PkJbp4TWh0k?si=TmI3wgHYTdAe4vBL",
            description: "Faça prancha e alterne elevando as pernas para ativar o core e glúteos."
          }
        ]
      },
      {
        id: "dia2",
        name: "Dia 2 - Braços e Costa + Core",
        coverImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f7",
            name: "Remada Curvada com Barra",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "gmjIjabNM30?si=H-uVJtBVItGLydaO",
            description: "Incline o tronco e puxe a barra em direção ao abdômen."
          },
          {
            id: "f8",
            name: "Rosca Direta com Halteres",
            sets: 3,
            reps: 15,
            type: "gym",
            videoId: "w9_ggo0_34k?si=3ropNhlJEvJWGoDB",
            description: "Foco em bíceps, controlando o movimento."
          },
          {
            id: "f9",
            name: "Tríceps Testa com Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "ir5PsbniVSc",
            description: "Deitada, estenda os braços para cima, flexionando os cotovelos."
          },
          {
            id: "f10",
            name: "Elevação Lateral com Halteres",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "qDAoUOmdbi4?si=ANeDWrB7TSftx059",
            description: "Levante os halteres até a altura dos ombros para trabalhar deltoides."
          },
          {
            id: "f11",
            name: "Superman ",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "rQzF5dMTvaA?si=YF9ukniWYn_lW5yX",
            description: "De bruços, eleve braços e pernas para fortalecer a lombar."
          },
          {
            id: "f12",
            name: "Russian Twist com Haltere",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "pzMWYoeSCzw?si=FSrReK-c7gcxsZjd",
            description: "Sentada, gire o tronco segurando um haltere."
          }
        ]
      },
      {
        id: "dia3",
        name: "Dia 3 - Treino de Alta Intensidade (HIIT)",
        coverImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f13",
            name: "Burpees",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "auBLPXO8Fww?si=ulyu-F0DyysElGAb",
            description: "Combine flexão, salto e agachamento."
          },
          {
            id: "f14",
            name: "mountain climbers",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "bw4lYQ3P-xI?si=WLHadTT94XeoFG5v",
            description: "coloque as duas mãos no chão e leve os pés até a mão alternando-os"
          },
          {
            id: "f15",
            name: "Squat Jump com Faixa Elástica ",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "flJu4CEP8J8?si=5vm0kg0xrvRGv1V1",
            description: "Coloque a faixa acima dos joelhos e salte do agachamento."
          },
          {
            id: "f16",
            name: "Remada com Faixa Elástica",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "JCLG_N3aYGE?si=57mb39SfW6lXLtEx",
            description: "Se for fácil, segure um haltere entre os pés para aumentar a carga."
          },
          {
            id: "f17",
            name: "Prancha (Plank)",
            sets: 3,
            reps: 1,
            type: "calisthenics",
            videoId: "qNRqGqESAWU?si=hwX6ym-jqQZ_817Y",
            description: "Mantenha a posição por 1 minuto."
          },
          {
            id: "f18",
            name: "Abdominal Bicicleta",
            sets: 3,
            reps: 1,
            type: "calisthenics",
            videoId: "E07kQpNXTNA?si=KBzeg1Ys4Q6CufwB",
            description: "Toque o cotovelo no joelho oposto alternadamente."
          }
        ]
      },
      {
        id: "dia4",
        name: "Dia 4 - Pernas (Posterior) e Glúteos",
        coverImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "f19",
            name: "Stiff com Barra",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "Bgb22cTqz8o?si=V-1-p7H9MUhj_PjO",
            description: "Flexione o tronco mantendo as pernas semiflexionadas."
          },
          {
            id: "f20",
            name: "Agachamento Búlgaro com halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "AYusKizMR4k?si=3v7hRv2TGpvMdEt2",
            description: "Apoie um pé no caixote e desça o joelho posterior."
          },
          {
            id: "f21",
            name: "Abdução deitada com Faixa",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "yx11OloeLI8?si=MeJb2M3EY6YolFvW",
            description: "De lado, eleve a perna contra a resistência da faixa."
          },
          {
            id: "f22",
            name: "Panturrilha em pé com halteres ou barra",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "9wf99TOtw6g?si=dkTlI4geccoJpM0u",
            description: "Segure halteres e eleve os calcanhares para panturrilhas."
          },
          {
            id: "f23",
            name: "Ponte Unilateral",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "VLGdHs2P3KY?si=fIIlmTspCdLlbtbM",
            description: "Eleve o quadril com uma perna estendida."
          },
          {
            id: "f24",
            name: "Prancha Lateral com Rotação",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "MljHeMTxmEU?si=nMkLNaLZXguZNQsq",
            description: "Gire o tronco levando o braço para cima."
          }
        ]
      },
      {
        id: "dia5",
        name: "Dia 5 - Full Body Funcional",
        coverImage: "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exercises: [
          {
            id: "f25",
            name: "Deadlift com Barra",
            sets: 3,
            reps: 10,
            type: "gym",
            videoId: "4Kf-h74drJ4?si=5AXpu391XT_VdYNn",
            description: "Trabalhe toda a cadeia posterior com técnica precisa."
          },
          {
            id: "f26",
            name: "Flexões de Joelhos",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "IODxDxX7oi4",
            description: "Se for difícil, faça com os joelhos apoiados no chão."
          },
          {
            id: "f27",
            name: "Agachamento Sumô com Haltere",
            sets: 3,
            reps: 10,
            type: "calisthenics",
            videoId: "uVvh99_y80A?si=XGXO9LUrMnKJyTg4",
            description: "Pernas abertas e haltere seguro com as duas mãos."
          },
          {
            id: "f28",
            name: "Remada Alta com Haltere",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "NFAEgfUIMFY?si=PgWGa2W0_mqlc7z5",
            description: "Puxe os halteres em direção ao queixo para ombros."
          },
          {
            id: "f29",
            name: "Salto para Caixote",
            sets: 3,
            reps: 10,
            type: "gym",
            videoId: "dMssLDQYYq4?si=uz95h2vwTWujbgyo",
            description: "Explosão para glúteos e cardio."
          },
          {
            id: "f30",
            name: "Elevação de Pernas Suspensas",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "Drdp1_Dc7Ss?si=jT-gTEhAY058x7o3",
            description: "Deitada, levante as pernas retas até 90°."
          }
        ]
      }
    ]
  }
];
