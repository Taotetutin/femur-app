import React, { useState } from 'react';
import { Calculator, Heart, Brain, Footprints } from 'lucide-react';
import { Header } from './components/Header';
import { InputField } from './components/InputField';
import { ResultCard } from './components/ResultCard';
import { Footer } from './components/Footer';
import { Note } from './components/Note';
import { femurLengthData, calculatePercentile } from './utils/femurData';

interface FormData {
  weeks: string;
  days: string;
  femurLength: string;
  cardiacCircumference: string;
  cerebellumLength: string;
  footLength: string;
}

interface Results {
  gestationalAge: string;
  p5: number;
  p1: number;
  femurLength: number;
  percentile: string;
  ratios: {
    femurFoot: string;
    femurCardiac: string;
    femurCerebellum: string;
  };
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    weeks: '',
    days: '',
    femurLength: '',
    cardiacCircumference: '',
    cerebellumLength: '',
    footLength: '',
  });
  const [results, setResults] = useState<Results | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const calculateResults = (e: React.FormEvent) => {
    e.preventDefault();
    const weeks = parseInt(formData.weeks);
    const days = parseInt(formData.days);
    const femurLength = parseFloat(formData.femurLength);
    const cardiacCircumference = parseFloat(formData.cardiacCircumference);
    const cerebellumLength = parseFloat(formData.cerebellumLength);
    const footLength = parseFloat(formData.footLength);

    const weekData = femurLengthData[weeks];
    const femurFootRatio = femurLength / footLength;
    const femurCardiacRatio = femurLength / cardiacCircumference;
    const femurCerebellumRatio = femurLength / cerebellumLength;

    setResults({
      gestationalAge: `${weeks} semanas ${days} días`,
      p5: weekData.P5,
      p1: weekData.P1,
      femurLength,
      percentile: calculatePercentile(weeks, femurLength),
      ratios: {
        femurFoot: femurFootRatio.toFixed(2),
        femurCardiac: femurCardiacRatio.toFixed(2),
        femurCerebellum: femurCerebellumRatio.toFixed(2)
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Header />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
              <form onSubmit={calculateResults} className="space-y-6">
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <InputField
                      label="Semanas"
                      name="weeks"
                      min={14}
                      max={39}
                      value={formData.weeks}
                      onChange={handleInputChange}
                    />
                    <InputField
                      label="Días"
                      name="days"
                      min={0}
                      max={6}
                      value={formData.days}
                      onChange={handleInputChange}
                    />
                  </div>

                  <InputField
                    label="Longitud de Fémur (mm)"
                    name="femurLength"
                    step="0.1"
                    value={formData.femurLength}
                    onChange={handleInputChange}
                    Icon={Calculator}
                  />

                  <InputField
                    label="Circunferencia Cardíaca (mm)"
                    name="cardiacCircumference"
                    step="0.1"
                    value={formData.cardiacCircumference}
                    onChange={handleInputChange}
                    Icon={Heart}
                  />

                  <InputField
                    label="Longitud de Cerebelo (mm)"
                    name="cerebellumLength"
                    step="0.1"
                    value={formData.cerebellumLength}
                    onChange={handleInputChange}
                    Icon={Brain}
                  />

                  <InputField
                    label="Longitud de Pie (mm)"
                    name="footLength"
                    step="0.1"
                    value={formData.footLength}
                    onChange={handleInputChange}
                    Icon={Footprints}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white py-3 rounded-lg font-medium hover:from-sky-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-[1.02]"
                >
                  Calcular
                </button>
              </form>

              <Note />
            </div>

            {/* Results Section */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-2xl font-semibold text-sky-900 mb-6">Resultados</h2>
              
              {results ? (
                <div className="space-y-4">
                  <ResultCard
                    title="Edad Gestacional"
                    value={results.gestationalAge}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <ResultCard
                      title="Percentil 5"
                      value={`${results.p5} mm`}
                    />
                    <ResultCard
                      title="Percentil 1"
                      value={`${results.p1} mm`}
                    />
                  </div>

                  <ResultCard
                    title="Longitud del Fémur"
                    value={`${results.femurLength} mm (${results.percentile})`}
                  />

                  <div className="space-y-4">
                    <ResultCard
                      title="Relación Fémur/Pie"
                      value={results.ratios.femurFoot}
                      normal="Normal: >1.0"
                      isNormal={parseFloat(results.ratios.femurFoot) > 1.0}
                    />
                    <ResultCard
                      title="Relación Fémur/Cardíaco"
                      value={results.ratios.femurCardiac}
                      normal="Normal: >0.5"
                      isNormal={parseFloat(results.ratios.femurCardiac) > 0.5}
                    />
                    <ResultCard
                      title="Relación Fémur/Cerebelo"
                      value={results.ratios.femurCerebellum}
                      normal="Normal: >1.5"
                      isNormal={parseFloat(results.ratios.femurCerebellum) > 1.5}
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center text-sky-600 py-8">
                  Ingrese los datos para ver los resultados
                </div>
              )}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;