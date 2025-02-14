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
        name: "Dia 1 - Push (Peito/Ombro/Tríceps)",
        coverImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m1",
            name: "Flexão Declinada (pés no caixote)",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "bpjqDjXBv-M?si=ququDGhRxRxV9azU",
            description: "Mãos no chão e pés elevados no caixote. Mantenha o core tensionado."
          },
          {
            id: "m2",
            name: "Desenvolvimento Militar com Barra",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "gXFVerym5vw?si=qUwcMbCmt3ymqFKz",
            description: "Em pé, empurre a barra acima da cabeça com controle."
          },
          {
            id: "m3",
            name: "Elevação Lateral com Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "3VcKaXpzqRo",
            description: "Cotovelos levemente flexionados, eleve até a altura dos ombros."
          },
          {
            id: "m4",
            name: "Tríceps Mergulho no Caixote",
            sets: 4,
            reps: 12,
            type: "calisthenics",
            videoId: "LdfpvZPnUSI?si=1wPU_1XIC0eH-g-c",
            description: "Apoie as mãos no caixote, cotovelos próximos ao corpo."
          },
          {
            id: "m5",
            name: "Abdominal Bicicleta",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "apmprS8H1MY",
            description: "Toque o cotovelo no joelho oposto alternadamente."
          },
          {
            id: "m6",
            name: "Prancha com Toque nos Ombros",
            sets: 3,
            reps: 1,
            type: "calisthenics",
            videoId: "qNRqGqESAWU",
            description: "Mantenha posição de prancha enquanto toca os ombros alternadamente de 30s a 1min"
          }
        ]
      },
      {
        id: "dia2",
        name: "Dia 2 - Inferiores + Cardio",
        coverImage: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m7",
            name: "Agachamento com Barra",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "WLw3eRGkM5U",
            description: "Desça até o paralelo mantendo as costas retas."
          },
          {
            id: "m8",
            name: "Afundo Búlgaro com Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "6Zz_RG0EHFE",
            description: "Perna traseira apoiada no caixote, desça com controle."
          },
          {
            id: "m9",
            name: "Step-up Explosivo no Caixote",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "k1f5xShoYys",
            description: "Subida explosiva alternando as pernas."
          },
          {
            id: "m10",
            name: "levantamento terra Romeno",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "jSomWOwLiGE",
            description: "Barra sobre o quadril, eleve os glúteos até a extensão total."
          },
          {
            id: "m11",
            name: "Polichinelo + Salto Vertical",
          sets: 3,
          reps: 30,
          type: "calisthenics",
          videoId: "Jii6Yw90ZZ8?si=GVT_-5ZMWJyFh21R",
          description: "Alternar 20s de polichinelo + 10s de salto vertical."
          },
          {
            id: "m12",
            name: "Escalador (Mountain Climber)",
            sets: 3,
            reps: 30,
            type: "calisthenics",
            videoId: "bw4lYQ3P-xI",
            description: "Movimento rápido alternando joelhos em direção ao peito."
          }
        ]
      },
      {
        id: "dia3",
        name: "Dia 3 - HIIT Full Body + Core",
        coverImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m13",
            name: "Burpee com Salto",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "auBLPXO8Fww",
            description: "Combine flexão, salto e agachamento em movimento fluido."
          },
          {
            id: "m14",
            name: "Remada Curvada com Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "roCP6wCXPqo",
            description: "Tronco inclinado, puxe halteres em direção ao abdômen."
          },
          {
            id: "m15",
            name: "Thruster com Halteres",
            sets: 4,
            reps: 12,
            type: "gym",
            videoId: "5wZm8O5aBcE?si=i8AO2Z3ufz7yEEqr",
            description: "Agachamento + desenvolvimento acima da cabeça."
          },
          {
            id: "m16",
            name: "Prancha com deslocamento Halteres",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "iv_XaWzhWws?si=SXjvxotlNl6EUlte",
            description: "Em prancha, arraste haltere de um lado para o outro."
          },
          {
            id: "m17",
            name: "Corrida Estacionária Alta",
            sets: 3,
            reps: 60,
            type: "calisthenics",
            videoId: "pvLUTrZFvi4?si=AxPZd5q7iwQjU1IE",
            description: "Simule corrida rápida elevando os joelhos."
          },
          {
            id: "m18",
            name: "Russian Twist com Haltere",
            sets: 3,
            reps: 20,
            type: "gym",
            videoId: "Tau0hsW8iR0?si=4zlZdC8D_8dp_sTF",
            description: "Gire o tronco alternando lados com haltere próximo ao chão."
          }
        ]
      },
      {
        id: "dia4",
        name: "Dia 4 - Pull (Costas/Bíceps) + Core",
        coverImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop",
        exercises: [
          {
            id: "m19",
            name: "ROSCA 21 - BARRA RETA",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "-aej3kEcNoU?si=l2sQHCDefUwFu3Yi",
            description: "Use a barra reta com anilhas."
          },
          {
            id: "m20",
            name: "Remada Unilateral com Haltere",
            sets: 3,
            reps: 12,
            type: "gym",
            videoId: "roCP6wCXPqo",
            description: "Apoie uma mão no caixote, puxe o haltere com controle."
          },
          {
            id: "m21",
            name: "Rosca Bíceps com Halteres",
            sets: 4,
            reps: 15,
            type: "gym",
            videoId: "s1vf8LEPpDA?si=4APuQeHiIelXUWBu",
            description: "Cotovelos fixos ao lado do corpo, contraia no topo."
          },
          {
            id: "m22",
            name: "Abdominal Canivete",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "cm6BadT-cLk?si=RtnswwaYsfMt6SvA",
            description: "Eleve pernas e tronco simultaneamente mantendo controle."
          },
          {
            id: "m23",
            name: "Superman",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "9LsIwRS8nwQ?si=Q7ZDt9lYQiBqcChQ",
            description: "Deitado, eleve braços e pernas mantendo 3s no topo."
          },
          {
            id: "m24",
            name: "Prancha Lateral com Torção",
            sets: 3,
            reps: 30,
            type: "calisthenics",
            videoId: "pHqz7Y30qfY?si=zTjV0JZIOD-6knzX",
            description: "Em prancha lateral, gire o tronco em direção ao chão."
          }
        ]
      },
      {
        id: "dia5",
        name: "Dia 5 - Core Intenso + Cardio",
        coverImage: "https://images.unsplash.com/photo-1579758682665-53a1a614eea6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        exercises: [
          {
            id: "m25",
            name: "Prancha com Elevação de Perna",
            sets: 3,
            reps: 15,
            type: "calisthenics",
            videoId: "9gmJ18FYD80?si=husnk6geYIx7btsL",
            description: "Eleve uma perna de cada vez mantendo o alinhamento."
          },
          {
            id: "m26",
            name: "Twist Russo com Haltere",
            sets: 4,
            reps: 20,
            type: "gym",
            videoId: "izyhHukwLac?si=kmnZL0s_y4VxwYWV",
            description: "Gire o tronco alternando lados com haltere."
          },
          {
            id: "m27",
            name: "Step-up Explosivo no Caixote",
            sets: 3,
            reps: 20,
            type: "calisthenics",
            videoId: "k1f5xShoYys",
            description: "Subida explosiva alternando as pernas."
          },
          {
            id: "m28",
            name: "Jump Squat",
            sets: 4,
            reps: 15,
            type: "calisthenics",
            videoId: "YGGq0AE5Uyc?si=wH7ARoAgcbZjZDBX",
            description: "Agachamento com salto explosivo na subida."
          },
          {
            id: "m29",
            name: "Flexão com Rotação",
            sets: 3,
            reps: 12,
            type: "calisthenics",
            videoId: "Bgam9Uop-po?si=l-oOeq1cP37dX3yT",
            description: "Após cada flexão, gire o tronco e eleve o braço."
          },
          {
            id: "m30",
            name: "Escalador (Mountain Climber)",
            sets: 3,
            reps: 30,
            type: "calisthenics",
            videoId: "bw4lYQ3P-xI",
            description: "Movimento rápido alternando joelhos em direção ao peito."
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
