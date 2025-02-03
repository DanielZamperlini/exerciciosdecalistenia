export type Exercise = {
  id: string;
  name: string;
  sets: number;
  reps: number;
  videoId: string;
  type: 'gym' | 'calisthenics';
};

export type WorkoutDay = {
  id: string;
  name: string;
  coverImage: string;
  exercises: Exercise[];
};

export const workoutRoutine: WorkoutDay[] = [
  {
    id: "segunda",
    name: "Segunda - Peito e Tríceps",
    coverImage: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&auto=format&fit=crop",
    exercises: [
      {
        id: "1",
        name: "Flexão de Braço",
        sets: 4,
        reps: 15,
        type: "calisthenics",
        videoId: "IODxDxX7oi4"
      },
      {
        id: "2",
        name: "Flexão Diamante (Tríceps)",
        sets: 3,
        reps: 12,
        type: "calisthenics",
        videoId: "J0DnG1_S92I"
      },
      {
        id: "3",
        name: "Dips em Cadeira",
        sets: 4,
        reps: 12,
        type: "calisthenics",
        videoId: "2z8JmcrW-As"
      },
      {
        id: "4",
        name: "Extensão de Tríceps na Cadeira",
        sets: 3,
        reps: 15,
        type: "calisthenics",
        videoId: "6kALZikXxLc"
      },
      {
        id: "5",
        name: "Flexão Declinada",
        sets: 3,
        reps: 12,
        type: "calisthenics",
        videoId: "SKxefn_1uu0"
      }
    ]
  },
  {
    id: "terca",
    name: "Terça - Costas e Bíceps",
    coverImage: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&auto=format&fit=crop",
    exercises: [
      {
        id: "6",
        name: "Barra Fixa",
        sets: 4,
        reps: 8,
        type: "calisthenics",
        videoId: "eGo4IYlbE5g"
      },
      {
        id: "7",
        name: "Remada em Mesa",
        sets: 3,
        reps: 12,
        type: "calisthenics",
        videoId: "EtuiCuAAhlU"
      },
      {
        id: "8",
        name: "Bíceps na Barra",
        sets: 4,
        reps: 10,
        type: "calisthenics",
        videoId: "5RFc3HF53h8"
      },
      {
        id: "9",
        name: "Australian Pull-ups",
        sets: 3,
        reps: 12,
        type: "calisthenics",
        videoId: "FnWrvWZLNz8"
      },
      {
        id: "10",
        name: "Remada Invertida",
        sets: 3,
        reps: 15,
        type: "calisthenics",
        videoId: "OYUxXMQwzFk"
      }
    ]
  },
  {
    id: "quarta",
    name: "Quarta - Pernas",
    coverImage: "https://plus.unsplash.com/premium_photo-1666736569069-79c1789adf52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXhlcmNpY2lvJTIwYWdhY2hhbWVudG98ZW58MHx8MHx8fDA%3D",
    exercises: [
      {
        id: "11",
        name: "Agachamento",
        sets: 4,
        reps: 20,
        type: "calisthenics",
        videoId: "aclHkVaku9U"
      },
      {
        id: "12",
        name: "Afundo",
        sets: 3,
        reps: 15,
        type: "calisthenics",
        videoId: "Q59ZvPhpySM"
      },
      {
        id: "13",
        name: "Elevação de Panturrilha",
        sets: 4,
        reps: 30,
        type: "calisthenics",
        videoId: "YXc1TdVX5Lw"
      },
      {
        id: "14",
        name: "Agachamento Búlgaro",
        sets: 3,
        reps: 12,
        type: "calisthenics",
        videoId: "2CjohXwRC9U"
      },
      {
        id: "15",
        name: "Salto com Agachamento",
        sets: 3,
        reps: 10,
        type: "calisthenics",
        videoId: "Azl5tkCzDcc"
      }
    ]
  },
  {
    id: "quinta",
    name: "Quinta - Costas e Peito",
    coverImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&auto=format&fit=crop",
    exercises: [
      {
        id: "16",
        name: "Flexão Archer",
        sets: 3,
        reps: 10,
        type: "calisthenics",
        videoId: "YER3H1_Mj3Y"
      },
      {
        id: "17",
        name: "Barra Fixa Pegada Larga",
        sets: 4,
        reps: 8,
        type: "calisthenics",
        videoId: "eGo4IYlbE5g"
      },
      {
        id: "18",
        name: "Flexão Hindu",
        sets: 3,
        reps: 12,
        type: "calisthenics",
        videoId: "p-8hwV7O1D4"
      },
      {
        id: "19",
        name: "Remada em Anel",
        sets: 4,
        reps: 10,
        type: "calisthenics",
        videoId: "vBvREbAj-cM"
      },
      {
        id: "20",
        name: "Flexão com Palmada",
        sets: 3,
        reps: 8,
        type: "calisthenics",
        videoId: "Z9C2IkzYxTQ"
      }
    ]
  },
  {
    id: "sexta",
    name: "Sexta - Peito, Costas e Bíceps",
    coverImage: "https://media.istockphoto.com/id/475480124/pt/foto/homem-usando-triceps-puxe-para-baixo.jpg?s=1024x1024&w=is&k=20&c=4wYLR7TAhQ0E4hnlCDxL8qxWHDBDpqL_BfZNz_tIdMc=",
    exercises: [
      {
        id: "21",
        name: "Muscle Up",
        sets: 3,
        reps: 5,
        type: "calisthenics",
        videoId: "2q8KMnWUYG8"
      },
      {
        id: "22",
        name: "Flexão Explosiva",
        sets: 4,
        reps: 10,
        type: "calisthenics",
        videoId: "K0qjX1KnWAs"
      },
      {
        id: "23",
        name: "Dominada Supinada",
        sets: 4,
        reps: 8,
        type: "calisthenics",
        videoId: "XZF0w0rbvYw"
      },
      {
        id: "24",
        name: "Pseudo Planche Push-ups",
        sets: 3,
        reps: 10,
        type: "calisthenics",
        videoId: "C-SML6xnVkI"
      },
      {
        id: "25",
        name: "Front Lever Raises",
        sets: 3,
        reps: 8,
        type: "calisthenics",
        videoId: "K3EwjmqsPnw"
      }
    ]
  }
];