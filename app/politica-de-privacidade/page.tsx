"use client"

import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export default function PoliticaDePrivacidade() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Política de Privacidade — Barbeiros.App
          </h1>
          
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Levamos sua privacidade a sério. Esta Política de Privacidade descreve como o Barbeiros.App coleta, utiliza, armazena, compartilha e protege os dados pessoais de usuários da plataforma, sempre em conformidade com a legislação aplicável, especialmente a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 – LGPD).
          </p>
          
          <p className="mt-4 text-sm text-muted-foreground">
            <strong>Última atualização:</strong> 14/05/2026
          </p>

          <section className="mt-12 space-y-8">
            {/* 1. Quem Somos */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">1. Quem Somos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                O Barbeiros.App é uma plataforma SaaS de gestão e agendamento online voltada para barbearias, salões e profissionais da área da beleza, permitindo gerenciamento de agendas, pagamentos, clientes, profissionais e comunicação com usuários.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                O Barbeiros.App atua como:
              </p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li><strong>Controlador de Dados</strong>, quando trata dados relacionados à própria operação da plataforma;</li>
                <li><strong>Operador de Dados</strong>, quando realiza tratamento em nome das barbearias e estabelecimentos que utilizam o sistema.</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Em caso de dúvidas sobre privacidade ou solicitações relacionadas aos seus dados pessoais, entre em contato:
              </p>
              <p className="mt-2 text-muted-foreground">
                <strong>E-mail:</strong> privacidade@barbeiros.app
              </p>
            </div>

            {/* 2. Dados Coletados */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">2. Dados Coletados</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Coletamos dados pessoais fornecidos diretamente pelos usuários, bem como dados coletados automaticamente durante o uso da plataforma.
              </p>
              
              <h3 className="mt-6 text-lg font-medium text-foreground">2.1 Dados de Clientes</h3>
              <p className="mt-2 text-muted-foreground">Podemos coletar:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Nome completo</li>
                <li>Número de telefone</li>
                <li>CPF (quando necessário)</li>
                <li>E-mail</li>
                <li>Data de nascimento</li>
                <li>Foto de perfil</li>
                <li>Histórico de agendamentos</li>
                <li>Serviços contratados</li>
                <li>Preferências de profissionais</li>
                <li>Informações de pagamento</li>
                <li>Mensagens e interações com a plataforma</li>
              </ul>

              <h3 className="mt-6 text-lg font-medium text-foreground">2.2 Dados de Barbeiros e Funcionários</h3>
              <p className="mt-2 text-muted-foreground">Podemos coletar:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Nome completo</li>
                <li>CPF</li>
                <li>Telefone</li>
                <li>E-mail</li>
                <li>Foto</li>
                <li>Agenda e disponibilidade</li>
                <li>Serviços executados</li>
                <li>Histórico de atendimentos</li>
                <li>Informações financeiras relacionadas aos atendimentos</li>
                <li>Dados de autenticação e acesso</li>
              </ul>

              <h3 className="mt-6 text-lg font-medium text-foreground">2.3 Dados de Estabelecimentos</h3>
              <p className="mt-2 text-muted-foreground">Podemos coletar:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Razão social</li>
                <li>Nome fantasia</li>
                <li>CNPJ</li>
                <li>Endereço</li>
                <li>Telefone</li>
                <li>E-mail</li>
                <li>Logotipo e imagens</li>
                <li>Dados financeiros</li>
                <li>Configurações operacionais</li>
                <li>Dados de cobrança e assinatura da plataforma</li>
              </ul>

              <h3 className="mt-6 text-lg font-medium text-foreground">2.4 Dados Coletados Automaticamente</h3>
              <p className="mt-2 text-muted-foreground">Ao acessar o Barbeiros.App, coletamos automaticamente:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Endereço IP</li>
                <li>Data e hora de acesso</li>
                <li>Tipo de dispositivo</li>
                <li>Sistema operacional</li>
                <li>Navegador utilizado</li>
                <li>Session ID</li>
                <li>Dados de geolocalização aproximada</li>
                <li>Logs de navegação</li>
                <li>Eventos de uso da plataforma</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </div>

            {/* 3. Como Utilizamos Seus Dados */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">3. Como Utilizamos Seus Dados</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Utilizamos os dados coletados para:
              </p>
              
              <h3 className="mt-6 text-lg font-medium text-foreground">Prestação dos Serviços</h3>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Criar e gerenciar contas</li>
                <li>Realizar agendamentos</li>
                <li>Gerenciar agendas</li>
                <li>Processar pagamentos</li>
                <li>Enviar confirmações e lembretes</li>
                <li>Permitir comunicação entre clientes e estabelecimentos</li>
                <li>Fornecer suporte técnico</li>
                <li>Melhorar a experiência dos usuários</li>
              </ul>

              <h3 className="mt-6 text-lg font-medium text-foreground">Segurança e Prevenção de Fraudes</h3>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Validar acessos</li>
                <li>Detectar atividades suspeitas</li>
                <li>Prevenir fraudes</li>
                <li>Garantir integridade da plataforma</li>
                <li>Realizar auditorias e monitoramento</li>
              </ul>

              <h3 className="mt-6 text-lg font-medium text-foreground">Marketing e Comunicação</h3>
              <p className="mt-2 text-muted-foreground">Podemos utilizar seus dados para:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Envio de campanhas promocionais</li>
                <li>Ofertas e novidades</li>
                <li>Remarketing</li>
                <li>Comunicação via e-mail, SMS, WhatsApp e notificações push</li>
              </ul>
              <p className="mt-2 text-muted-foreground">
                O usuário poderá cancelar o recebimento dessas comunicações a qualquer momento.
              </p>
            </div>

            {/* 4. Pagamentos */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">4. Pagamentos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                O Barbeiros.App poderá utilizar gateways de pagamento terceirizados para processar transações financeiras.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Os dados de cartão de crédito não são armazenados diretamente pelo Barbeiros.App, sendo processados por parceiros especializados e compatíveis com os padrões de segurança PCI-DSS.
              </p>
              <p className="mt-4 text-muted-foreground">As formas de pagamento podem incluir:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Pix</li>
                <li>Cartão de crédito</li>
                <li>Carteiras digitais</li>
                <li>Assinaturas recorrentes</li>
              </ul>
            </div>

            {/* 5. Cookies */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">5. Cookies e Tecnologias de Rastreamento</h2>
              <p className="mt-4 text-muted-foreground">Utilizamos cookies para:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Manter sessões autenticadas</li>
                <li>Memorizar preferências</li>
                <li>Melhorar desempenho</li>
                <li>Realizar métricas e análises</li>
                <li>Personalizar conteúdo e anúncios</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Ao utilizar a plataforma, você concorda com o uso de cookies conforme esta Política.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                O usuário poderá desabilitar cookies diretamente em seu navegador, embora algumas funcionalidades possam ser afetadas.
              </p>
            </div>

            {/* 6. Compartilhamento */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">6. Compartilhamento de Dados</h2>
              <p className="mt-4 text-muted-foreground">Poderemos compartilhar dados pessoais com:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Barbearias e profissionais vinculados ao atendimento</li>
                <li>Gateways de pagamento</li>
                <li>Serviços de hospedagem e infraestrutura</li>
                <li>Plataformas de envio de mensagens</li>
                <li>Ferramentas analíticas</li>
                <li>Parceiros comerciais</li>
                <li>Autoridades públicas, quando exigido por lei</li>
              </ul>
              <p className="mt-4 text-muted-foreground font-medium">
                Nunca comercializamos dados pessoais de usuários.
              </p>
            </div>

            {/* 7. Dados Tratados pelas Barbearias */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">7. Dados Tratados pelas Barbearias</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                As barbearias que utilizam o Barbeiros.App possuem autonomia para tratar dados de seus próprios clientes dentro da plataforma. Nesses casos:
              </p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>O estabelecimento pode atuar como Controlador dos dados</li>
                <li>O Barbeiros.App atua como Operador da infraestrutura tecnológica</li>
                <li>O estabelecimento é responsável pelo uso adequado das informações</li>
              </ul>
            </div>

            {/* 8. Seus Direitos */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">8. Seus Direitos (LGPD)</h2>
              <p className="mt-4 text-muted-foreground">Você poderá solicitar, a qualquer momento:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Confirmação de tratamento de dados</li>
                <li>Acesso aos dados pessoais</li>
                <li>Correção de dados incompletos</li>
                <li>Anonimização</li>
                <li>Bloqueio</li>
                <li>Exclusão</li>
                <li>Portabilidade</li>
                <li>Revogação do consentimento</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Solicitações podem ser realizadas pelo e-mail: <strong>privacidade@barbeiros.app</strong>
              </p>
            </div>

            {/* 9. Segurança */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">9. Segurança da Informação</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais, incluindo:
              </p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Criptografia</li>
                <li>Controle de acesso</li>
                <li>Monitoramento de segurança</li>
                <li>Backups</li>
                <li>Logs de auditoria</li>
                <li>Proteção contra acessos não autorizados</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Apesar disso, nenhum sistema é totalmente invulnerável.
              </p>
            </div>

            {/* 10. Retenção */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">10. Retenção dos Dados</h2>
              <p className="mt-4 text-muted-foreground">Os dados pessoais serão armazenados somente pelo período necessário para:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>Cumprimento das finalidades desta Política</li>
                <li>Obrigações legais e regulatórias</li>
                <li>Exercício regular de direitos</li>
                <li>Prevenção a fraudes</li>
              </ul>
              <p className="mt-4 text-muted-foreground">
                Após esse período, os dados poderão ser anonimizados ou excluídos.
              </p>
            </div>

            {/* 11. Transferência Internacional */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">11. Transferência Internacional de Dados</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Alguns serviços utilizados pelo Barbeiros.App poderão armazenar dados em servidores localizados fora do Brasil, incluindo Estados Unidos e países da União Europeia.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Nesses casos, garantimos a adoção de medidas adequadas de proteção e conformidade com a LGPD.
              </p>
            </div>

            {/* 12. Links Externos */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">12. Links Externos</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                A plataforma poderá conter links para sites e serviços de terceiros.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                O Barbeiros.App não se responsabiliza pelas práticas de privacidade desses ambientes externos.
              </p>
            </div>

            {/* 13. Alterações */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">13. Alterações Nesta Política</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Esta Política poderá ser atualizada periodicamente.
              </p>
              <p className="mt-4 text-muted-foreground">Quando houver alterações relevantes, os usuários poderão ser notificados por:</p>
              <ul className="mt-2 list-disc pl-6 text-muted-foreground space-y-1">
                <li>E-mail</li>
                <li>Notificações na plataforma</li>
                <li>Avisos no sistema</li>
              </ul>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                O uso contínuo da plataforma após alterações representa concordância com os novos termos.
              </p>
            </div>

            {/* 14. Contato */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">14. Contato</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Para dúvidas, solicitações ou assuntos relacionados à privacidade e proteção de dados:
              </p>
              <p className="mt-4 text-muted-foreground">
                <strong>Barbeiros.App</strong><br />
                E-mail: privacidade@barbeiros.app
              </p>
            </div>

            {/* 15. Foro */}
            <div>
              <h2 className="text-xl font-semibold text-foreground">15. Foro</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Esta Política será interpretada conforme a legislação brasileira.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Fica eleito o foro da comarca de Belo Horizonte/MG para dirimir quaisquer controvérsias relacionadas a esta Política de Privacidade.
              </p>
            </div>

            {/* Definições */}
            <div className="border-t border-border pt-8">
              <h2 className="text-xl font-semibold text-foreground">Definições</h2>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li>
                  <strong>Cookies:</strong> arquivos temporários armazenados no dispositivo do usuário para melhorar a experiência de navegação.
                </li>
                <li>
                  <strong>Dados Pessoais:</strong> informações relacionadas a pessoa natural identificada ou identificável.
                </li>
                <li>
                  <strong>Dados Sensíveis:</strong> dados sobre origem racial, convicção religiosa, opinião política, saúde, biometria, entre outros definidos pela LGPD.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
