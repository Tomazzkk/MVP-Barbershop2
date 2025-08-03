import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Agendamento = () => {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6">Agende seu Horário</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>1. Escolha o Serviço e o Barbeiro</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Serviço</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corte">Corte de Cabelo - R$ 40,00</SelectItem>
                    <SelectItem value="barba">Barba - R$ 30,00</SelectItem>
                    <SelectItem value="combo">Combo (Cabelo + Barba) - R$ 65,00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium">Barbeiro</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o barbeiro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="joao">João</SelectItem>
                    <SelectItem value="carlos">Carlos</SelectItem>
                    <SelectItem value="pedro">Pedro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>2. Escolha a Data e Hora</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Calendar
                mode="single"
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Resumo do Agendamento</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Serviço:</span>
                <strong>Corte de Cabelo</strong>
              </div>
              <div className="flex justify-between">
                <span>Barbeiro:</span>
                <strong>João</strong>
              </div>
              <div className="flex justify-between">
                <span>Data:</span>
                <strong>25/07/2024</strong>
              </div>
              <div className="flex justify-between">
                <span>Horário:</span>
                <strong>10:30</strong>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>R$ 40,00</span>
              </div>
              <Button className="w-full">Confirmar Agendamento</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Agendamento;