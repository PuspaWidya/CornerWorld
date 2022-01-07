import create from "zustand";

// const useStore = create((set) => {
//   people: ["asd", "asdf"];
//   addPerson: (person) =>
//     set((state) => ({
//       people: [...state.people, person],
//     }));
// });

export const useStore = create((set) => ({
  students: [
    { id: "1", name: "Aaron Saunders", section: "advanced" },
    { id: "2", name: "Andrea Saunders", section: "beginners" },
    { id: "3", name: "Bill Smith", section: "beginners" },
  ],
  addStudent: (student) =>
    set((state) => ({
      students: [
        {
          name: student.name,
          id: Math.random() * 100 + "",
          section: student.section,
        },
        ...state.students,
      ],
    })),
  removeStudent: (id) =>
    set((state) => ({
      students: state.students.filter((student) => student.id !== id),
    })),
  updateStudent: (student) =>
    set((state) => ({
      students: state.students.map((item) => {
        if (item.id === student.id) {
          return {
            ...item,
            name: student.name,
            section: student.section,
          };
        } else {
          return item;
        }
      }),
    })),
}));

const defaultMessage = "asfdasdfasdf";

function generateMessage(limit = 20) {
  const message = [];
  for (let i = 0; i < limit; i++) {
    message.push(defaultMessage);
  }
  return message;
}

export const useStore2 = create((set) => ({
  message: generateMessage(5),

  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));
