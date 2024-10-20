import { create } from 'zustand';

const useStore = create((set) => {
  // Initialize clients from local storage
  const storedClients = JSON.parse(localStorage.getItem('clients')) || [];
  return {
    clients: storedClients,
    name: '',
    phone: '',
    service: '',
    times: [
        {
            first: "10:00",
            second: "11:00",
            available: true
        },
        {
            first: "11:00",
            second: "12:00",
            available: true 
        },
        {
            first: "12:00",
            second: "1:00",
            available: true 
        },
        {
            first: "1:00",
            second: "2:00",
            available: true 
        },
        {
            first: "2:00",
            second: "3:00",
            available: true
        },
        {
            first: "3:00",
            second: "4:00",
            available: true 
        },
        {
            first: "4:00",
            second: "5:00",
            available: true 
        },
        {
            first: "5:00",
            second: "6:00",
            available:true
        },
        {
            first: "6:00",
            second: "7:00",
            available: true 
        }
      ],

    reserveTime: (selectedTime) =>
      set((state) => ({
        times: state.times.map((time) =>
          time.first === selectedTime.first && time.second === selectedTime.second
            ? { ...time, available: false }
            : time
        ),
      })),

    addClient: (newClient) => set((state) => {
      const updatedClients = [...state.clients, newClient];
      localStorage.setItem('clients', JSON.stringify(updatedClients)); // Save updated clients to local storage
      return { clients: updatedClients };
    }),

    setName: (name) => set({ name }),
    setPhone: (phone) => set({ phone }),
    setService: (service) => set({ service }),
  };
});

export default useStore;
