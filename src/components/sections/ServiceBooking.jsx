import React, { useState, useEffect } from 'react';

function ServiceBooking() {
    const [service, setService] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [availableTimes, setAvailableTimes] = useState([]);

    // Calcula las horas disponibles según la fecha elegida
    const calculateAvailableTimes = (selectedDate) => {
        const startHour = 9; // hora de inicio de atención
        const endHour = 18; // hora de fin de atención
        let times = [];

        const dateNow = new Date();
        const chosenDate = new Date(selectedDate);

        // Generar horarios de atención solo dentro del rango de horas de atención
        for (let hour = startHour; hour <= endHour; hour++) {
            if (chosenDate.setHours(hour) > dateNow) {
                times.push(`${hour.toString().padStart(2, '0')}:00`);
            }
        }

        return times;
    };

    // Encuentra el próximo día laborable
    const findNextBusinessDay = (startDate) => {
        let nextDate = new Date(startDate);
        nextDate.setDate(nextDate.getDate() + 1); // empezar al día siguiente
        // Avanzar a días laborables (lunes a sábado)
        while (nextDate.getDay() === 0) { // 0 es Domingo
            nextDate.setDate(nextDate.getDate() + 1);
        }
        return nextDate.toISOString().split('T')[0];
    };

    useEffect(() => {
        if (date) {
            const times = calculateAvailableTimes(date);
            if (times.length === 0) {
                // Si no hay tiempos disponibles, mover al próximo día hábil
                setDate(findNextBusinessDay(date));
            } else {
                setAvailableTimes(times);
            }
        }
    }, [date]);

    useEffect(() => {
        if (!date) {
            setDate(new Date().toISOString().split('T')[0]); // Establecer la fecha inicial al cargar
        }
    }, []);

    return (
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-x-4">
            <select
                className="form-select appearance-none block w-full sm:w-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={service}
                onChange={e => setService(e.target.value)}
            >
                <option>Select a service</option>
                <option value="1">General Checkup</option>
                <option value="2">Oil Change</option>
                <option value="3">Battery Replacement</option>
                <option value="4">Tire Change</option>
            </select>
            <input
                type="date"
                className="form-input px-3 py-1.5 border border-gray-300 rounded w-full sm:w-auto"
                value={date}
                onChange={e => setDate(e.target.value)}
            />
            <select
                className="form-select appearance-none block w-full sm:w-auto px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                value={time}
                onChange={e => setTime(e.target.value)}
                disabled={!date || availableTimes.length === 0}
            >
                {availableTimes.map(t => (
                    <option key={t} value={t}>{t}</option>
                ))}
            </select>
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                disabled={!service || !date || !time}
            >
                Check availability
            </button>
        </div>
    );
}

export default ServiceBooking;
