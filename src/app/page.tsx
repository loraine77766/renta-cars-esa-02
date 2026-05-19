import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CarList } from '@/components/CarList';
import { cars } from '@/lib/cars';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageSquare, Clock, ShieldCheck, ListChecks, Map, CalendarSearch, Car, User, CreditCard, MailCheck, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  const sortedCars = [...cars].sort((a, b) => a.pricePerDay - b.pricePerDay);
  const cheapestCar = sortedCars[0];
  const corolla = cars.find(c => c.id === 15);
  const otherCar = sortedCars.find(c => c.id !== cheapestCar.id && c.id !== corolla?.id);
  const recommendedCars = [cheapestCar, corolla, otherCar].filter((c): c is NonNullable<typeof c> => c !== undefined);

  const howToSteps = [
    { icon: <CalendarSearch className="h-8 w-8" />, title: "Lugar, hora y fecha", description: "Seleccione lugar, hora y fecha. Dé click a Buscar." },
    { icon: <Car className="h-8 w-8" />, title: "Autos disponibles", description: "Elija un auto de los resultados." },
    { icon: <User className="h-8 w-8" />, title: "Datos personales", description: "Complete sus datos. Confirmamos disponibilidad en 24h." },
    { icon: <CreditCard className="h-8 w-8" />, title: "Pagar reserva", description: "Recibirá un link de pago." },
    { icon: <MailCheck className="h-8 w-8" />, title: "Recibe tu Voucher", description: "Envíamos su Voucher y factura." }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <section className="hero-premium text-white">
          <div className="container mx-auto px-4 py-20 md:py-28 text-center">
            <div className="inline-block gold-border rounded-sm px-4 py-1.5 text-xs uppercase tracking-[0.2em] gold-text mb-6">Excelencia en Movilidad</div>
            <h1 className="font-headline text-4xl md:text-6xl font-bold mb-4 leading-tight tracking-tight">
              Renta de Autos en Cuba
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Vehículos premium con el respaldo y la confianza que mereces.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-headline font-semibold rounded-sm px-8 gold-border">
                <Link href="/autos">Ver Flota <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-accent/30 gold-text hover:bg-white/5 rounded-sm px-8">
                <Link href="#como-funciona">¿Cómo funciona?</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-2 text-[hsl(222,47%,14%)] dark:text-white">¿Cómo reservar?</h2>
            <p className="gold-text text-center text-sm uppercase tracking-widest mb-12">Solo 5 pasos</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
               {howToSteps.map((step, index) => (
                   <div key={index} className="relative text-center group">
                       <div className="mx-auto bg-[hsl(222,47%,14%)] dark:bg-gray-700 gold-text rounded-sm h-20 w-20 flex items-center justify-center mb-4 gold-border group-hover:shadow-lg group-hover:scale-105 transition-all duration-300">
                           <span className="absolute -top-2 -right-2 bg-accent text-primary rounded-full h-7 w-7 flex items-center justify-center font-bold text-sm">{index + 1}</span>
                           {step.icon}
                       </div>
                       <h3 className="font-headline text-base font-semibold text-[hsl(222,47%,14%)] dark:text-white mb-1">{step.title}</h3>
                       <p className="text-sm text-muted-foreground">{step.description}</p>
                   </div>
               ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-10">
              <div>
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-[hsl(222,47%,14%)] dark:text-white">Flota Premium</h2>
                <p className="gold-text text-sm uppercase tracking-widest mt-2">Selección exclusiva</p>
              </div>
              <Button asChild variant="outline" className="hidden sm:flex border-accent/30 gold-text hover:bg-accent hover:text-primary rounded-sm">
                <Link href="/autos">Ver todos <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
            <CarList cars={recommendedCars} />
          </div>
        </section>

        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-2 text-[hsl(222,47%,14%)] dark:text-white">¿Por qué elegirnos?</h2>
            <p className="gold-text text-sm uppercase tracking-widest text-center mb-12">Nuestros pilares</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <MessageSquare className="h-10 w-10" />, title: "Asistencia Exclusiva", desc: "Atención personalizada antes, durante y después de tu reserva." },
                { icon: <Clock className="h-10 w-10" />, title: "Confirmación Rápida", desc: "Respuesta en menos de 24 horas." },
                { icon: <ShieldCheck className="h-10 w-10" />, title: "Respaldo en Cuba", desc: "Contáctos locales para apoyarte durante tu viaje." }
              ].map((item, i) => (
                <Card key={i} className="text-center border-0 shadow-md hover:shadow-xl transition-all duration-300 rounded-sm gold-border bg-white dark:bg-gray-800">
                  <CardHeader>
                    <div className="mx-auto bg-[hsl(222,47%,14%)] dark:bg-gray-700 gold-text rounded-sm h-20 w-20 flex items-center justify-center mb-2">
                      {item.icon}
                    </div>
                    <CardTitle className="font-headline text-xl text-[hsl(222,47%,14%)] dark:text-white">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{item.desc}</CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="shadow-md border-0 rounded-sm gold-border">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-[hsl(222,47%,14%)] dark:text-white flex items-center gap-2">
                    <ListChecks className="h-6 w-6 gold-text" />
                    Informaciones
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-2"><span className="gold-text mt-1">—</span>Edad mínima 21 años, máxima 80 años.</li>
                    <li className="flex gap-2"><span className="gold-text mt-1">—</span>Licencia de conducción vigente (mín. 2 años).</li>
                    <li className="flex gap-2"><span className="gold-text mt-1">—</span>Pasaporte vigente y Voucher impreso.</li>
                    <li className="flex gap-2"><span className="gold-text mt-1">—</span>Gasolina, impuesto aeropuerto y seguro pueden estar incluidos.</li>
                    <li className="flex gap-2"><span className="gold-text mt-1">—</span>Devolución en punto diferente: cargo extra.</li>
                    <li className="flex gap-2"><span className="gold-text mt-1">—</span>Seguro obligatorio. Pagos solo con tarjeta.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="shadow-md border-0 rounded-sm gold-border">
                <CardHeader>
                  <CardTitle className="font-headline text-2xl text-[hsl(222,47%,14%)] dark:text-white flex items-center gap-2">
                    <Map className="h-6 w-6 gold-text" />
                    Cuba te espera
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    {["Pasear por el Malecón de La Habana.", "Tomar un Mojito en La Bodeguita del Medio.", "Recorrer la Habana Vieja.", "Bañarte en Varadero.", "Visitar Trinidad colonial.", "Viñales a caballo.", "Cienfuegos neoclásico."].map((item, i) => (
                      <li key={i} className="flex gap-2"><Star className="h-4 w-4 gold-text shrink-0 mt-0.5" />{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="hero-premium py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-headline text-3xl font-bold text-white mb-4">Viaja con estilo</h2>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">Reserva tu auto premium hoy</p>
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90 font-headline font-semibold rounded-sm px-10 gold-border">
              <Link href="/autos">Ver Flota <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
