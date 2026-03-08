import React, { useState, useEffect } from 'react';

// --- ÍCONES INLINE (Sem dependências externas para evitar erros) ---
const IconCheckCircle2 = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const IconCircle = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/></svg>;
const IconQrCode = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3v5h3v-5z"/><path d="M8 12h8"/><path d="M12 8v8"/></svg>;
const IconCopy = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>;
const IconShieldCheck = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>;
const IconUser = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const IconLogOut = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>;
const IconCheck = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"/></svg>;
const IconSparkles = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>;
const IconLock = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
const IconX = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>;
const IconAlertCircle = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>;
const IconClock = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconDownload = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>;
const IconTrendingUp = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const IconBarChart = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></svg>;
const IconPieChart = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>;
const IconFilter = ({ size=24, className="" }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>;

// --- CONFIGURAÇÃO FIREBASE DO UTILIZADOR ---
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, signInWithCustomToken, signInAnonymously, GoogleAuthProvider, signInWithPopup, signOut, setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc, onSnapshot, updateDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD1BfLrYbIf9UhapJA8Eu8O_AEY2Bzx4Lk",
  authDomain: "app-terceirao.firebaseapp.com",
  projectId: "app-terceirao",
  storageBucket: "app-terceirao.firebasestorage.app",
  messagingSenderId: "695228920939",
  appId: "1:695228920939:web:aaca89bcdf201e8a1a6d2e",
  measurementId: "G-N0B31D7PJX"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const appId = 'app-terceirao';

// --- CONFIGURAÇÃO DO PIX ---
const MEU_PIX_COPIA_E_COLA = "00020126580014br.gov.bcb.pix0136[SUA_CHAVE_AQUI]5204000053039865802BR5913SEU NOME AQUI6009SAO PAULO62070503***6304E2D3";
const PIX_1_A_4 = "00020101021126680014br.gov.bcb.pix0114+55339883786430228Parcela 1 2 3 ou 4 Formatura5204000053039865406100.005802BR5917SAMUEL M DA SILVA6013GOVERNADOR VA62070503***6304184D";
const PIX_5_A_8 = "00020101021126680014br.gov.bcb.pix0114+55339883786430228Parcela 5 6 7 ou 8 Formatura5204000053039865406125.005802BR5917SAMUEL M DA SILVA6013GOVERNADOR VA62070503***6304A408";

// LINKS DAS IMAGENS PNG
const URL_DA_SUA_LOGO_CARNE = "https://i.imgur.com/yxlAsvl.png"; 
const URL_DA_LOGO_TERCEIRAO = "https://i.imgur.com/hMk1pfb.png";

// --- CONFIGURAÇÃO API GEMINI ---
const generateGeminiContent = async (prompt: string) => {
  const apiKey = "";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
  const payload = { contents: [{ parts: [{ text: prompt }] }] };

  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      if (!response.ok) throw new Error('Erro na API');
      const data = await response.json();
      return data.candidates?.[0]?.content?.parts?.[0]?.text || "Erro ao gerar texto.";
    } catch (err) {
      if (attempt === 5) return "Serviço temporariamente indisponível.";
      await new Promise(resolve => setTimeout(resolve, Math.pow(2, attempt) * 1000));
    }
  }
};

// --- ELEMENTOS VISUAIS DE IDENTIDADE ---
const BackgroundIdentity = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <svg className="absolute -top-10 -left-10 w-80 h-80 text-[#C41E1E] opacity-20" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M0,0 L200,0 M0,0 L180,70 M0,0 L140,140 M0,0 L70,180 M0,0 L0,200" />
      <path d="M40,0 Q35,15 36,14 Q25,25 28,28 Q15,35 0,40" />
      <path d="M80,0 Q75,30 72,28 Q50,50 56,56 Q30,75 0,80" />
      <path d="M120,0 Q115,45 108,42 Q75,75 84,84 Q45,115 0,120" />
    </svg>
    <svg className="absolute -top-10 -right-10 w-96 h-96 text-black opacity-[0.05] transform scale-x-[-1]" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M0,0 L200,0 M0,0 L180,70 M0,0 L140,140 M0,0 L70,180 M0,0 L0,200" />
      <path d="M40,0 Q35,15 36,14 Q25,25 28,28 Q15,35 0,40" />
      <path d="M80,0 Q75,30 72,28 Q50,50 56,56 Q30,75 0,80" />
    </svg>
    <div className="absolute top-[12%] left-[10%] text-[#C41E1E] text-4xl opacity-30 animate-pulse">✦</div>
    <div className="absolute bottom-[20%] right-[8%] text-black text-2xl opacity-20">✦</div>
  </div>
);

export default function App() {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [usersList, setUsersList] = useState<any[]>([]);
  const [installments, setInstallments] = useState<any[]>([]);
  const [userNameInput, setUserNameInput] = useState('');
  const [userClassInput, setUserClassInput] = useState('');
  const [selectedPaymentMonth, setSelectedPaymentMonth] = useState<number | null>(null);
  const [termsAccepted, setTermsAccepted] = useState(false); // NOVO ESTADO PARA OS TERMOS
  const [copied, setCopied] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminForm, setAdminForm] = useState({ user: '', pass: '' });
  const [adminError, setAdminError] = useState('');
  const [profileError, setProfileError] = useState('');
  const [reminderData, setReminderData] = useState<any>(null);
  const [motivationData, setMotivationData] = useState({ loading: false, text: null as string | null });
  const [classSummary, setClassSummary] = useState({ loading: false, text: null as string | null });
  
  const [filterClass, setFilterClass] = useState('Todas as Turmas');

  const monthData: any = {
    1: { name: 'Abril', value: 100 },
    2: { name: 'Maio', value: 100 },
    3: { name: 'Junho', value: 100 },
    4: { name: 'Julho', value: 100 },
    5: { name: 'Agosto', value: 125 },
    6: { name: 'Setembro', value: 125 },
    7: { name: 'Outubro', value: 125 },
    8: { name: 'Novembro', value: 125 }
  };

  const getCurrentPixCode = () => {
    if (!selectedPaymentMonth) return "";
    return selectedPaymentMonth <= 4 ? PIX_1_A_4 : PIX_5_A_8;
  };

  const currentPixCode = getCurrentPixCode();
  const qrCodeUrl = currentPixCode ? `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentPixCode)}` : "";

  useEffect(() => {
    const initAuth = async () => {
      try {
        await setPersistence(auth, browserLocalPersistence);
      } catch (error) { console.error("Erro na autenticação:", error); }
    };
    initAuth();
    
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        if (currentUser.displayName && !userNameInput) setUserNameInput(currentUser.displayName);
      } else {
          try {
             await signInAnonymously(auth);
          } catch(e) {
             console.error("Failed to sign in anonymously", e);
          }
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!user) return;
    const usersRef = collection(db, 'artifacts', appId, 'public', 'data', 'client_users');
    const unsubUsers = onSnapshot(usersRef, (snapshot) => {
      const uList: any[] = [];
      snapshot.forEach(doc => uList.push({ id: doc.id, ...doc.data() }));
      setUsersList(uList);
    }, (err) => console.error(err));

    const installmentsRef = collection(db, 'artifacts', appId, 'public', 'data', 'installments');
    const unsubInstallments = onSnapshot(installmentsRef, (snapshot) => {
      const instList: any[] = [];
      snapshot.forEach(doc => instList.push({ id: doc.id, ...doc.data() }));
      setInstallments(instList);
    }, (err) => console.error(err));

    return () => { unsubUsers(); unsubInstallments(); };
  }, [user]);

  const handleGoogleLogin = async () => {
    try {
      setLoginError('');
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
    } catch (error: any) { 
      console.error("Erro detalhado do Google:", error);
      if (error.code === 'auth/popup-closed-by-user') {
        setLoginError("O pop-up de login foi fechado antes de concluir.");
      } else if (error.code === 'auth/unauthorized-domain') {
        setLoginError("Domínio não autorizado. Adicione este link no Firebase.");
      } else {
        setLoginError("Bloqueio de segurança detectado. Abra o site numa NOVA ABA (botão no canto superior direito) para fazer login.");
      }
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    window.location.reload();
  };

  const handleSaveProfile = async (e: any) => {
    if (e) e.preventDefault();
    setProfileError('');
    
    if (!userNameInput.trim() || !userClassInput) {
      setProfileError('Por favor, preencha o seu nome e selecione a turma.');
      return;
    }
    
    if (!user) return;
    
    try {
      const userDocRef = doc(db, 'artifacts', appId, 'public', 'data', 'client_users', user.uid);
      await setDoc(userDocRef, { 
        name: userNameInput.trim(), 
        class: userClassInput,
        email: user.email || '', 
        photoURL: user.photoURL || '',
        createdAt: new Date().toISOString() 
      }, { merge: true });
    } catch (error) { 
      setProfileError('Erro ao guardar os dados. Tente novamente.');
      console.error(error); 
    }
  };

  const handleAdminSubmit = (e: any) => {
    if (e) e.preventDefault();
    
    const safeUser = (adminForm.user || '').trim().toLowerCase();
    const safePass = (adminForm.pass || '').trim();
    
    if (!safeUser || !safePass) {
      setAdminError('Preencha todos os campos para entrar.');
      return;
    }
    
    if (safeUser === 'melga' && safePass === '12345') {
      setIsAdmin(true);
      setShowAdminModal(false);
      setAdminForm({ user: '', pass: '' });
      setAdminError('');
    } else { 
      setAdminError('Utilizador ou palavra-passe incorretos.'); 
    }
  };

  // --- Animação de Confetes Real (Carregamento dinâmico seguro) 🎉 ---
  const fireConfetti = () => {
    const triggerConfetti = () => {
      const duration = 2000;
      const end = Date.now() + duration;
      
      (function frame() {
        (window as any).confetti({
          particleCount: 5,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: ['#C41E1E', '#000000', '#ffffff'],
          zIndex: 99999
        });
        (window as any).confetti({
          particleCount: 5,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: ['#C41E1E', '#000000', '#ffffff'],
          zIndex: 99999
        });
        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      }());
    };

    if (!(window as any).confetti) {
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.9.3/dist/confetti.browser.min.js';
      script.onload = triggerConfetti;
      document.body.appendChild(script);
    } else {
      triggerConfetti();
    }
  };

  const togglePaymentStatus = async (instId: string, currentStatus: string) => {
    try {
      const newStatus = currentStatus === 'paid' ? 'pending' : 'paid';
      const instRef = doc(db, 'artifacts', appId, 'public', 'data', 'installments', instId);
      await updateDoc(instRef, { status: newStatus });
      
      if(newStatus === 'paid') fireConfetti();
    } catch (error) { console.error(error); }
  };

  const handleDeclarePayment = async (month: number) => {
    if (!user || !termsAccepted) return; // BLOQUEIO ADICIONADO AQUI TAMBÉM
    const instId = `${user.uid}_month_${month}`;
    try {
      const instRef = doc(db, 'artifacts', appId, 'public', 'data', 'installments', instId);
      await setDoc(instRef, {
        userId: user.uid,
        userName: currentUserData?.name || user.displayName || 'Aluno',
        month: month,
        status: 'review'
      }, { merge: true });
      setSelectedPaymentMonth(null);
      setTermsAccepted(false); // RESET DO CHECKBOX
      fireConfetti(); 
    } catch (error) { console.error(error); }
  };

  const handleCopyPix = () => {
    const codeToCopy = getCurrentPixCode();
    if (codeToCopy) {
      navigator.clipboard.writeText(codeToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleGenerateMotivation = async (paidCount: number) => {
    setMotivationData({ loading: true, text: 'A consultar as estrelas...' });
    const prompt = `És o "Oráculo da Formatura". O aluno pagou ${paidCount}/8 parcelas. Diz uma previsão divertida e bem curta sobre o baile de formatura em português de Portugal.`;
    const generatedText = await generateGeminiContent(prompt);
    setMotivationData({ loading: false, text: generatedText });
  };

  const handleGenerateReminder = async (clientName: string, pendingMonth: number) => {
    setReminderData({ name: clientName, month: pendingMonth, text: 'A gerar cobrança...', loading: true });
    const monthName = monthData[pendingMonth].name;
    const prompt = `Escreve uma mensagem de WhatsApp cobrando a parcela de ${monthName} para o aluno ${clientName} em português de Portugal. Tom de brincadeira de escola, lembrando que é preciso pagar o carnê para a festa acontecer.`;
    const generatedText = await generateGeminiContent(prompt);
    setReminderData({ name: clientName, month: pendingMonth, text: generatedText, loading: false });
  };

  const handleGenerateClassSummary = async () => {
    setClassSummary({ loading: true, text: 'A ler as contas da turma...' });
    const prompt = `Resumo tático de finanças de formatura em português de Portugal. Analisa o progresso e dá uma dica para o tesoureiro.`;
    const generatedText = await generateGeminiContent(prompt);
    setClassSummary({ loading: false, text: generatedText });
  };

  const exportToCSV = () => {
    if (usersList.length === 0) {
      alert("Não há dados para exportar ainda.");
      return;
    }
    let csvContent = "Nome do Aluno,Turma,Status";
    for(let m = 1; m <= 8; m++) {
      csvContent += `,Mes_${m}_${monthData[m].name}`;
    }
    csvContent += ",Total_Pago,Valor_Arrecadado(R$)\n";

    usersList.forEach(client => {
      const clientInsts = installments.filter(i => i.userId === client.id);
      let row = `"${client.name}","${client.class || 'N/A'}","Registado"`;
      let totalPagas = 0;
      let valorArrecadado = 0;

      for (let m = 1; m <= 8; m++) {
        const inst = clientInsts.find(i => i.month === m);
        const statusText = inst?.status === 'paid' ? 'PAGO' : (inst?.status === 'review' ? 'EM ANALISE' : 'PENDENTE');
        row += `,"${statusText}"`;
        if (inst?.status === 'paid') {
          totalPagas++;
          valorArrecadado += monthData[m].value;
        }
      }
      row += `,"${totalPagas}/8","R$ ${valorArrecadado},00"\n`;
      csvContent += row;
    });

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "Relatorio_Terceirao.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getInstallmentStatus = (month: number) => {
    const inst = installments.find(i => i.userId === user?.uid && i.month === month);
    return inst ? inst.status : 'pending';
  };

  const isUnlocked = (month: number) => {
    if (month === 1) return true;
    const prevStatus = getInstallmentStatus(month - 1);
    return prevStatus === 'paid';
  };

  const calculatePartyProgress = () => {
    const FIXED_GOAL = 40000;
    const paidInstallments = installments.filter(i => i.status === 'paid');
    let currentValue = 0;
    paidInstallments.forEach(inst => {
      if (monthData[inst.month]) currentValue += monthData[inst.month].value;
    });
    const percent = Math.min(Math.round((currentValue / FIXED_GOAL) * 100), 100);
    return { percent, current: currentValue, goal: FIXED_GOAL };
  };

  const getGlobalStats = () => {
    const total = usersList.length * 8;
    if (total === 0) return { paidPct: 0, reviewPct: 0, pendingPct: 0, paid: 0, review: 0 };
    const paid = installments.filter(i => i.status === 'paid').length;
    const review = installments.filter(i => i.status === 'review').length;
    const pending = total - paid - review;
    return {
      paid, review, pending,
      paidPct: Math.round((paid/total)*100),
      reviewPct: Math.round((review/total)*100),
      pendingPct: Math.round((pending/total)*100)
    };
  };

  const getClassPerformance = () => {
    const classes = ['3º Ano A', '3º Ano B', '3º Ano Noturno'];
    return classes.map(c => {
      const classUsers = usersList.filter(u => u.class === c);
      const classTotalInsts = classUsers.length * 8;
      if (classTotalInsts === 0) return { name: c, pct: 0 };
      const classUserIds = classUsers.map(u => u.id);
      const classPaidInsts = installments.filter(i => classUserIds.includes(i.userId) && i.status === 'paid').length;
      return { name: c, pct: Math.round((classPaidInsts/classTotalInsts)*100) };
    });
  };

  const partyProgress = calculatePartyProgress();
  const globalStats = getGlobalStats();
  const classPerformance = getClassPerformance();
  const filteredUsersList = filterClass === 'Todas as Turmas' ? usersList : usersList.filter(u => u.class === filterClass);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-[#F5F4EF] font-sans m-0 p-0">
        <BackgroundIdentity />
        <div className="w-10 h-10 border-4 border-[#C41E1E] border-t-transparent rounded-full animate-spin z-10"></div>
      </div>
    );
  }

  const currentUserData = usersList.find(u => u.id === user?.uid);

  const HeroArtwork = () => (
    <div className="w-full flex flex-col items-center mb-0 pt-2 px-0 animate-in fade-in zoom-in duration-1000 pointer-events-none relative z-10">
      <img src={URL_DA_LOGO_TERCEIRAO} alt="Logo" className="w-full max-w-[20rem] sm:max-w-[28rem] h-auto object-contain transition-transform" />
      <img src={URL_DA_SUA_LOGO_CARNE} alt="Carnê" className="w-full max-w-[14rem] sm:max-w-[18rem] h-auto object-contain drop-shadow-lg -mt-8 sm:-mt-12 z-20 relative mix-blend-multiply opacity-95" />
    </div>
  );

  // === INJEÇÃO AGRESSIVA DE CSS PARA DERRUBAR AS PAREDES DO VITE ===
  const GlobalCSSReset = () => (
    <style dangerouslySetInnerHTML={{__html: `
      :root { margin: 0 !important; padding: 0 !important; max-width: 100vw !important; }
      html, body, #root { 
        width: 100%; 
        min-height: 100vh; 
        margin: 0 !important; 
        padding: 0 !important; 
        max-width: none !important; 
        background-color: #F5F4EF !important; 
        text-align: left !important; 
        overflow-x: hidden;
      }
      .ios-shadow { box-shadow: 0 10px 40px rgba(0,0,0,0.06); }
    `}} />
  );

  // --- TELA DE LOGIN (LOGGED OUT) ---
  if ((!user || user.isAnonymous) && !isAdmin) {
    return (
      <div className="min-h-screen w-full flex flex-col bg-[#F5F4EF] font-sans relative overflow-hidden">
        <GlobalCSSReset />
        <BackgroundIdentity />
        
        <div className="absolute top-6 right-6 z-[50]">
          <button 
            onClick={() => setShowAdminModal(true)} 
            className="flex items-center gap-2 px-4 py-2.5 bg-white/60 backdrop-blur-md text-gray-800 rounded-full ios-shadow border border-white/40 hover:bg-white transition active:scale-95 font-semibold text-xs uppercase tracking-widest cursor-pointer"
          >
            <IconShieldCheck size={16} className="text-[#C41E1E]" /> Admin
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-4 max-w-5xl mx-auto w-full relative z-10">
          <HeroArtwork />
          <div className="bg-white/90 backdrop-blur-xl p-8 w-full max-w-sm rounded-[2.5rem] ios-shadow animate-in slide-in-from-bottom-8 duration-500 border border-white/60 mt-4 z-30">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-black tracking-tighter mb-2 uppercase">Acesso do Formando</h2>
              <p className="text-gray-500 text-sm font-medium leading-relaxed">Inicia sessão com o teu Google para conferir o teu carnê personalizado.</p>
            </div>
            {loginError && <div className="bg-red-50 text-[#C41E1E] p-4 rounded-2xl text-[10px] mb-6 flex items-center gap-2 font-bold uppercase tracking-tight border border-[#C41E1E]/10 italic"><IconAlertCircle size={14} className="flex-shrink-0" /> {loginError}</div>}
            <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center gap-3 bg-black text-white font-black py-4 px-4 rounded-full hover:bg-gray-800 transition active:scale-95 shadow-xl shadow-black/20 uppercase tracking-tighter cursor-pointer">Entrar com Google</button>
          </div>
        </div>

        {/* MODAL ADMIN FIXO NO ROOT Z-INDEX MÁXIMO */}
        {showAdminModal && (
          <div className="fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-md z-[99999] flex items-center justify-center p-4 m-0 top-0 left-0">
            <div className="bg-white/95 backdrop-blur-2xl w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20 animate-in zoom-in duration-200">
              <div className="p-6 text-center relative border-b border-gray-100">
                <button onClick={() => setShowAdminModal(false)} className="absolute right-6 top-6 bg-gray-100 text-gray-500 hover:text-black rounded-full p-2 transition cursor-pointer"><IconX size={16} /></button>
                <div className="w-16 h-16 bg-[#C41E1E]/10 text-[#C41E1E] rounded-full flex items-center justify-center mx-auto mb-4 relative"><IconLock size={28} /><span className="absolute -top-1 -right-1 text-black text-xs">✦</span></div>
                <h3 className="text-xl font-bold tracking-tight text-black uppercase">Cofre do Terceirão</h3>
              </div>
              <div className="p-6 space-y-4">
                {adminError && <div className="text-[#C41E1E] text-xs text-center bg-red-50 py-3 rounded-2xl font-bold uppercase border border-red-100">{adminError}</div>}
                <input type="text" placeholder="Utilizador" value={adminForm.user} onChange={(e) => setAdminForm(prev => ({...prev, user: e.target.value}))} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-medium text-black shadow-inner" />
                <input type="password" placeholder="Palavra-passe" value={adminForm.pass} onChange={(e) => setAdminForm(prev => ({...prev, pass: e.target.value}))} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-medium text-black shadow-inner" />
                <button type="button" onClick={handleAdminSubmit} className="w-full bg-black text-white font-bold py-5 rounded-full hover:bg-[#C41E1E] transition active:scale-95 shadow-lg uppercase tracking-widest text-xs cursor-pointer">Acessar Painel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // --- TELA DE PERFIL NOVO (LOGGED IN MAS SEM TURMA) ---
  if (user && !user.isAnonymous && !currentUserData && !isAdmin) {
    return (
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-[#F5F4EF] p-4 font-sans relative overflow-hidden">
        <GlobalCSSReset />
        <BackgroundIdentity />
        <HeroArtwork />
        <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[3rem] ios-shadow max-w-sm w-full relative z-30 animate-in slide-in-from-bottom-8 duration-500 border border-white/60 mt-4">
          <button onClick={handleLogout} className="absolute top-8 right-8 text-gray-300 hover:text-black transition cursor-pointer"><IconLogOut size={24} /></button>
          <div className="flex justify-center mb-6 mt-6">
            {user.photoURL ? <img src={user.photoURL} alt="Foto" className="w-24 h-24 rounded-full border-4 border-white shadow-lg" /> : <div className="w-24 h-24 bg-gray-50 text-[#C41E1E]/40 rounded-full flex items-center justify-center shadow-inner border-2 border-white"><IconUser size={40} /></div>}
          </div>
          <h2 className="text-3xl font-black text-center text-black tracking-tighter mb-4 uppercase">Olá, {user.displayName?.split(' ')[0] || 'Aluno'}!</h2>
          <p className="text-gray-500 text-center mb-6 text-sm font-medium leading-relaxed">Confirma os teus dados para gerarmos o teu carnê oficial de formando.</p>
          <div className="space-y-4">
            {profileError && <div className="text-[#C41E1E] text-[10px] text-center bg-red-50 py-3 rounded-2xl font-bold uppercase border border-red-100">{profileError}</div>}
            <input type="text" placeholder="NOME COMPLETO" value={userNameInput} onChange={(e) => setUserNameInput(e.target.value)} className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-black text-center text-lg text-black shadow-inner" />
            <select value={userClassInput} onChange={(e) => setUserClassInput(e.target.value)} className="w-full px-6 py-5 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-black text-center text-lg text-gray-500 shadow-inner cursor-pointer appearance-none">
              <option value="" disabled>SELECIONA A TUA TURMA</option>
              <option value="3º Ano A">3º ANO A</option>
              <option value="3º Ano B">3º ANO B</option>
              <option value="3º Ano Noturno">3º ANO NOTURNO</option>
            </select>
            <button type="button" onClick={handleSaveProfile} className="w-full bg-black text-white font-black py-5 mt-2 rounded-full hover:bg-[#C41E1E] transition active:scale-95 shadow-xl shadow-black/20 uppercase tracking-widest cursor-pointer">Criar Meu Carnê</button>
          </div>
        </div>
      </div>
    );
  }

  // --- DASHBOARD PRINCIPAL E ADMIN ---
  return (
    <div className="min-h-screen w-full bg-[#F5F4EF] font-sans text-black pb-20 relative overflow-x-hidden">
      <GlobalCSSReset />
      <BackgroundIdentity />

      <header className="fixed top-0 w-full bg-[#F5F4EF]/85 backdrop-blur-xl z-[50] px-6 py-4 border-b border-black/5">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3">
             <div className="w-9 h-9 bg-white rounded-[0.8rem] flex items-center justify-center ios-shadow text-[#C41E1E] font-serif font-black text-lg relative overflow-hidden">✦</div>
             <span className="font-black tracking-tighter text-gray-800 uppercase text-sm">Controle Terceirão</span>
          </div>
          <div className="flex items-center gap-2">
            {isAdmin ? (
              <button onClick={() => setIsAdmin(false)} className="px-5 py-2.5 bg-black text-white rounded-full text-[10px] font-black hover:bg-[#C41E1E] transition active:scale-95 uppercase tracking-widest cursor-pointer">Sair Admin</button>
            ) : (
              <>
                <button onClick={() => setShowAdminModal(true)} className="w-10 h-10 bg-white text-gray-400 rounded-full flex items-center justify-center ios-shadow hover:text-[#C41E1E] transition active:scale-95 shadow-sm border border-black/5 cursor-pointer"><IconShieldCheck size={18} /></button>
                <button onClick={handleLogout} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-400 hover:text-[#C41E1E] transition ios-shadow active:scale-95 shadow-sm border border-black/5 cursor-pointer"><IconLogOut size={16} /></button>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 mt-24 relative z-10 w-full">
        
        {/* === TERMÓMETRO DA FESTA === */}
        {usersList.length > 0 && (
          <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[2.5rem] ios-shadow mb-6 border border-white/60 relative overflow-hidden w-full">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2">
                <IconTrendingUp size={20} className="text-green-500" />
                <h3 className="font-black text-black tracking-tighter uppercase italic">Meta do Baile</h3>
              </div>
              <span className="font-bold text-gray-400 text-xs">Arrecadado: R$ {partyProgress.current.toLocaleString('pt-BR')},00</span>
            </div>
            <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden shadow-inner relative">
              <div className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2" style={{ width: `${Math.max(partyProgress.percent, 5)}%` }}></div>
            </div>
            <div className="mt-2 text-right">
               <span className="text-[10px] font-black text-green-600 uppercase tracking-widest">{partyProgress.percent}% CONCLUÍDO DA NOSSA META DE R$ {partyProgress.goal.toLocaleString('pt-BR')},00</span>
            </div>
          </div>
        )}

        {!isAdmin ? (
          <div className="space-y-6 w-full">
            <HeroArtwork />
            <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-[2.5rem] ios-shadow flex flex-col sm:flex-row justify-between items-center gap-6 border border-white/60 -mt-4 relative z-30 shadow-2xl shadow-black/5 w-full">
              <div className="flex items-center gap-5 text-center sm:text-left">
                {user?.photoURL ? <img src={user.photoURL} alt="Perfil" className="w-16 h-16 rounded-full shadow-md border-2 border-white" /> : <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 shadow-inner"><IconUser size={28} className="text-[#C41E1E]/30"/></div>}
                <div><h2 className="text-2xl sm:text-3xl font-black tracking-tighter text-black flex items-center gap-2 justify-center sm:justify-start uppercase">{currentUserData?.name || user?.displayName || 'Aluno'} <span className="text-[#C41E1E] text-xl">✦</span></h2><p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">{currentUserData?.class || 'Turma não informada'} • VIP Formando</p></div>
              </div>
              <div className="w-full sm:w-auto bg-[#F5F4EF] px-10 py-5 rounded-[1.8rem] flex flex-col items-center border border-black/5 shadow-inner">
                <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest mb-1">Pagos</p>
                <p className="text-3xl font-black text-black tracking-tighter">{installments.filter(i => i.userId === user?.uid && i.status === 'paid').length} <span className="text-xl text-[#C41E1E] opacity-50">/ 8</span></p>
              </div>
            </div>

            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-[2.5rem] ios-shadow flex gap-5 items-center border border-white/60 w-full">
              <div className="bg-black p-4 rounded-2xl flex-shrink-0 text-white relative overflow-hidden shadow-lg shadow-black/20"><IconSparkles size={28} /></div>
              <div className="flex-1">
                {motivationData.text ? <p className="font-bold text-gray-700 leading-tight text-[15px] uppercase tracking-tighter italic">"{motivationData.text}"</p> : <div><h3 className="font-black text-lg text-black uppercase tracking-tighter">Oráculo da Formatura</h3><button onClick={() => handleGenerateMotivation(installments.filter(i => i.userId === user?.uid && i.status === 'paid').length)} className="text-[10px] font-black bg-[#F5F4EF] text-[#C41E1E] px-6 py-2.5 rounded-full active:scale-95 transition mt-2 border border-black/5 uppercase cursor-pointer">✨ Ver Previsão</button></div>}
              </div>
            </div>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((m) => {
                const status = getInstallmentStatus(m);
                const isPaid = status === 'paid';
                const isReview = status === 'review';
                const unlocked = isUnlocked(m);
                const currentMonthData = monthData[m];
                
                return (
                  <div key={m} className={`bg-white/95 backdrop-blur-md p-7 rounded-[2.5rem] flex flex-col transition-all duration-300 border border-white/50 w-full 
                    ${isPaid ? 'ios-shadow ring-4 ring-[#C41E1E]/10 bg-gradient-to-b from-white to-red-50/20' : 
                      isReview ? 'ios-shadow ring-4 ring-amber-100 bg-gradient-to-b from-white to-amber-50/30' : 
                      'ios-shadow hover:-translate-y-1 hover:shadow-xl'}`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Parcela 0{m}</span>
                        <h4 className="text-2xl font-black text-black tracking-tighter uppercase mt-1">{currentMonthData.name}</h4>
                        <p className={`text-xl font-black mt-1 tracking-tighter ${!unlocked && !isPaid && !isReview ? 'text-gray-300' : 'text-[#C41E1E]'}`}>R$ {currentMonthData.value}</p>
                      </div>
                      
                      {isPaid ? <IconCheckCircle2 className="text-[#C41E1E]" size={28} /> : 
                       isReview ? <IconClock className="text-amber-500" size={28} /> :
                       !unlocked ? <IconLock className="text-gray-200" size={28} /> :
                       <IconCircle className="text-gray-300" size={28} />}
                    </div>

                    <div className="mt-auto">
                      {isPaid ? (
                        <div className="w-full py-4 bg-[#C41E1E]/10 text-[#C41E1E] rounded-[1.2rem] text-center font-black uppercase text-[10px] tracking-widest">CONCLUÍDO</div>
                      ) : isReview ? (
                        <div className="w-full py-4 bg-amber-50 text-amber-600 rounded-[1.2rem] text-center font-bold text-[10px] tracking-widest uppercase italic">Em Análise</div>
                      ) : !unlocked ? (
                        <button disabled className="w-full py-4 bg-gray-100 text-gray-400 rounded-[1.2rem] text-center font-black text-[10px] tracking-widest flex items-center justify-center gap-2 cursor-not-allowed border border-gray-200 uppercase">
                          <IconLock size={12} /> Bloqueado
                        </button>
                      ) : (
                        <button onClick={() => { setSelectedPaymentMonth(m); setTermsAccepted(false); }} className="w-full py-4 bg-black text-white rounded-[1.2rem] text-center font-black text-xs uppercase tracking-widest hover:bg-[#C41E1E] transition active:scale-95 shadow-md shadow-black/10 cursor-pointer">Pagar Agora</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            {!isUnlocked(2) && !installments.find(i => i.userId === user?.uid && i.month === 1 && i.status === 'paid') && (
              <div className="p-5 bg-white/60 border border-white rounded-[2rem] flex items-center gap-3 text-gray-500 text-[10px] font-bold uppercase tracking-widest ios-shadow mt-4">
                <IconAlertCircle size={16} className="text-[#C41E1E]" /> Paga a primeira parcela para desbloquear as seguintes!
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-500 w-full">
            {/* VISÃO ADMIN (TESOURARIA) */}
            <div className="bg-black p-10 rounded-[3rem] ios-shadow flex justify-between items-center relative overflow-hidden">
              <span className="absolute top-4 right-10 text-[#C41E1E] text-4xl opacity-50">✦</span>
              <div className="relative z-10"><h2 className="text-4xl font-black tracking-tighter text-white uppercase italic leading-none">Central da Tesouraria</h2><p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-4 opacity-60">Validação e Gestão Financeira.</p></div>
              <IconShieldCheck size={48} className="text-[#C41E1E] opacity-50 z-10" />
            </div>

            {/* NOVOS GRÁFICOS ADMIN */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              
              <div className="bg-white rounded-[3rem] p-8 ios-shadow border border-white/60 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-6">
                   <div className="flex items-center gap-2"><IconPieChart size={20} className="text-[#C41E1E]"/><h3 className="font-black text-black uppercase tracking-tighter">Status Global</h3></div>
                   <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{usersList.length * 8} Parcelas</span>
                </div>
                
                <div className="w-full h-8 flex rounded-full overflow-hidden shadow-inner mb-4">
                   <div style={{width: `${globalStats.paidPct}%`}} className="bg-green-500 h-full transition-all duration-1000"></div>
                   <div style={{width: `${globalStats.reviewPct}%`}} className="bg-amber-400 h-full transition-all duration-1000"></div>
                   <div style={{width: `${globalStats.pendingPct}%`}} className="bg-gray-200 h-full transition-all duration-1000"></div>
                </div>

                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <div className="flex items-center gap-1 text-green-600"><div className="w-2 h-2 rounded-full bg-green-500"></div> Pagos ({globalStats.paidPct}%)</div>
                  <div className="flex items-center gap-1 text-amber-600"><div className="w-2 h-2 rounded-full bg-amber-400"></div> Análise ({globalStats.reviewPct}%)</div>
                  <div className="flex items-center gap-1 text-gray-500"><div className="w-2 h-2 rounded-full bg-gray-200"></div> Aberto ({globalStats.pendingPct}%)</div>
                </div>
              </div>

              <div className="bg-white rounded-[3rem] p-8 ios-shadow border border-white/60 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-6"><IconBarChart size={20} className="text-[#C41E1E]"/><h3 className="font-black text-black uppercase tracking-tighter">Taxa de Pagamento por Turma</h3></div>
                
                <div className="space-y-4">
                  {classPerformance.map((cls, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-1 text-gray-600">
                        <span>{cls.name}</span>
                        <span>{cls.pct}% PAGO</span>
                      </div>
                      <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                        <div style={{width: `${cls.pct}%`}} className="bg-black h-full rounded-full transition-all duration-1000"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-[3rem] ios-shadow border border-white flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4"><IconSparkles size={24} className="text-[#C41E1E]" /><h3 className="font-black text-xl text-black uppercase tracking-tighter">Relatório AI</h3></div>
                {classSummary.text ? <div className="bg-[#F5F4EF] p-5 rounded-[2rem] text-gray-700 font-medium text-sm leading-relaxed border border-white shadow-inner">{classSummary.text}</div> : <button onClick={handleGenerateClassSummary} className="text-xs font-black bg-black text-white px-8 py-4 rounded-full active:scale-95 flex items-center justify-center gap-2 shadow-lg uppercase tracking-widest w-full cursor-pointer">✨ Gerar Resumo</button>}
              </div>

              <div className="bg-[#C41E1E] p-8 rounded-[3rem] ios-shadow border border-[#C41E1E]/50 flex flex-col justify-center text-white relative overflow-hidden">
                <div className="absolute -bottom-10 -right-10 text-white/10 rotate-12"><IconDownload size={140}/></div>
                <div className="flex items-center gap-3 mb-4 relative z-10"><IconDownload size={24} className="text-white" /><h3 className="font-black text-xl uppercase tracking-tighter">Exportar Dados</h3></div>
                <p className="text-white/80 font-medium text-sm mb-5 relative z-10">Descarrega a tabela com todas as parcelas de todos os alunos prontas para usar no Excel.</p>
                <button onClick={exportToCSV} className="text-xs font-black bg-white text-[#C41E1E] px-8 py-4 rounded-full active:scale-95 flex items-center justify-center gap-2 shadow-xl uppercase tracking-widest w-full relative z-10 hover:bg-black hover:text-white transition cursor-pointer">
                  ⬇️ Descarregar .CSV
                </button>
              </div>
            </div>

            {/* LISTA DE ALUNOS COM FILTROS */}
            <div className="bg-white rounded-[3rem] ios-shadow overflow-hidden p-4 border border-white w-full">
              
              <div className="p-4 sm:p-6 pb-2">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-black text-2xl text-black tracking-tighter uppercase italic">Formandos ({filteredUsersList.length})</h3>
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
                  {['Todas as Turmas', '3º Ano A', '3º Ano B', '3º Ano Noturno'].map(t => (
                    <button 
                      key={t} 
                      onClick={() => setFilterClass(t)} 
                      className={`px-5 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all active:scale-95 flex items-center gap-2 cursor-pointer
                        ${filterClass === t ? 'bg-black text-white shadow-md' : 'bg-gray-50 text-gray-500 border border-gray-200 hover:bg-gray-100'}`}
                    >
                      {filterClass === t && <IconFilter size={12}/>} {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="divide-y divide-gray-50 px-2 sm:px-4">
                {filteredUsersList.length === 0 && <p className="p-10 text-center text-gray-400 uppercase text-xs font-bold italic">Nenhum aluno registado nesta turma.</p>}
                
                {filteredUsersList.map(client => {
                  const clientInsts = installments.filter(i => i.userId === client.id).sort((a, b) => a.month - b.month);
                  const paidCount = clientInsts.filter(i => i.status === 'paid').length;
                  return (
                    <div key={client.id} className="py-6 sm:py-8 hover:bg-[#F5F4EF]/50 transition rounded-[2.5rem] px-4 my-2 border border-transparent hover:border-gray-100">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
                        <div className="flex items-center gap-5">
                          {client.photoURL ? (
                             <img src={client.photoURL} alt="P" className="w-14 h-14 rounded-full border-2 border-white shadow-md" />
                          ) : (
                            <div className="w-14 h-14 bg-black text-white rounded-full flex items-center justify-center font-black text-xl border-4 border-white shadow-md">{client.name ? client.name.charAt(0).toUpperCase() : 'A'}</div>
                          )}
                          <div>
                            <h4 className="text-xl font-bold text-black uppercase tracking-tighter italic">{client.name}</h4>
                            <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{paidCount}/8 quitadas • {client.class || 'Turma N/A'}</p>
                          </div>
                        </div>
                        {clientInsts.some(i => i.status !== 'paid') && <button onClick={() => handleGenerateReminder(client.name, clientInsts.find(i => i.status !== 'paid').month)} className="text-[10px] font-black bg-red-50 text-[#C41E1E] px-6 py-3 rounded-full hover:bg-black hover:text-white flex items-center gap-2 uppercase tracking-widest border border-[#C41E1E]/10 shadow-sm transition cursor-pointer"><IconSparkles size={14} /> Cobrar IA</button>}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {[1,2,3,4,5,6,7,8].map(m => {
                          const inst = clientInsts.find(i => i.month === m);
                          const isPaid = inst?.status === 'paid';
                          const isReview = inst?.status === 'review';
                          return (
                            <button 
                              key={m} 
                              onClick={() => inst && togglePaymentStatus(inst.id, inst.status)} 
                              className={`flex-1 min-w-[3.8rem] py-4 rounded-2xl flex flex-col items-center justify-center transition active:scale-90 shadow-sm cursor-pointer
                                ${isPaid ? 'bg-green-50 text-green-600 border border-green-100' : 
                                  isReview ? 'bg-amber-100 text-amber-600 animate-pulse border border-amber-200 shadow-md ring-2 ring-amber-500/20' : 
                                  'bg-gray-50 text-gray-300 border border-gray-100 hover:bg-gray-200'}`}
                            >
                              <span className="text-[9px] font-black mb-1 text-black opacity-40 uppercase">M0{m}</span>
                              {isPaid ? <IconCheckCircle2 size={20} /> : isReview ? <IconClock size={20} /> : <IconCircle size={20} />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      {/* MODAL PAGAMENTO (PARA ALUNOS) */}
      {selectedPaymentMonth !== null && !isAdmin && (
        <div className="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-md z-[99999] flex items-end sm:items-center justify-center p-0 sm:p-4 animate-in fade-in duration-300 top-0 left-0">
          <div className="bg-white w-full max-w-sm rounded-t-[3rem] sm:rounded-[3rem] shadow-2xl relative animate-in slide-in-from-bottom-12 duration-500 pb-8 sm:pb-0 border border-white/50 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-black via-[#C41E1E] to-black opacity-20"></div>
            <div className="p-8 pb-4 text-center relative border-b border-gray-50">
              <button onClick={() => { setSelectedPaymentMonth(null); setTermsAccepted(false); }} className="absolute right-6 top-6 bg-gray-100 text-gray-500 hover:text-black rounded-full p-2 transition active:scale-90 shadow-sm cursor-pointer"><IconX size={20}/></button>
              <h3 className="text-3xl font-black text-black tracking-tighter uppercase italic">{monthData[selectedPaymentMonth].name} ✦</h3>
              <p className="text-4xl font-black text-black mt-2 tracking-tighter">R$ {monthData[selectedPaymentMonth].value},00</p>
            </div>
            <div className="p-8 pt-6 text-center">
              <div className="bg-white p-5 rounded-[2.5rem] shadow-2xl border border-gray-100 mx-auto w-full max-w-[250px] mb-8 flex justify-center relative overflow-hidden shadow-inner">
                <img src={qrCodeUrl} alt="QR Code Pix" className="w-52 h-52 rounded-xl relative z-10" />
              </div>
              <div className="text-left bg-[#F5F4EF] p-6 rounded-[2rem] mb-6 border border-white shadow-inner">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-1.5"><IconQrCode size={14} className="text-[#C41E1E]"/> Pix Copia e Cola</p>
                <div className="flex items-center gap-3">
                  <input type="text" readOnly value={currentPixCode} className="flex-1 bg-transparent text-black font-black text-xs focus:outline-none truncate" />
                  <button onClick={handleCopyPix} className="bg-black text-white p-4 rounded-2xl active:scale-90 shadow-lg shadow-black/20 transition cursor-pointer">{copied ? <IconCheck size={20} /> : <IconCopy size={20} />}</button>
                </div>
              </div>

              {/* === NOVO AVISO DE CONCORDÂNCIA === */}
              <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3 text-left">
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={termsAccepted} 
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mt-1 w-5 h-5 accent-[#C41E1E] cursor-pointer"
                />
                <label htmlFor="terms" className="text-[10px] leading-tight text-red-800 font-bold uppercase cursor-pointer select-none">
                  Ao adquirir este Carnê, você concorda que o valor total deverá ser pago até o final, mesmo em caso de desistência ou interrupção da participação, não havendo reembolso dos valores já pagos.
                </label>
              </div>

              <button 
                disabled={!termsAccepted}
                onClick={() => handleDeclarePayment(selectedPaymentMonth)} 
                className={`w-full py-6 rounded-[1.8rem] font-black transition active:scale-95 shadow-2xl flex justify-center items-center gap-3 uppercase tracking-tighter text-sm italic
                  ${termsAccepted ? 'bg-green-500 text-white shadow-green-500/20 hover:bg-green-600' : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'}`}
              >
                <IconCheckCircle2 size={24} /> Confirmar que paguei
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL MENSAGEM IA */}
      {reminderData && isAdmin && (
        <div className="fixed inset-0 w-screen h-screen bg-black/60 backdrop-blur-md z-[99999] flex items-center justify-center p-4 top-0 left-0">
          <div className="bg-white/98 backdrop-blur-3xl w-full max-w-md rounded-[3rem] shadow-2xl overflow-hidden animate-in zoom-in duration-300 border border-white/40">
            <div className="p-8 text-black flex justify-between items-center border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="bg-black text-[#C41E1E] p-3 rounded-2xl shadow-lg shadow-black/20"><IconSparkles size={20}/></div>
                <h3 className="font-black tracking-tighter text-xl uppercase italic">Mensagem Gerada</h3>
              </div>
              <button onClick={() => setReminderData(null)} className="bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition cursor-pointer"><IconX size={20} /></button>
            </div>
            <div className="p-8">
              <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-5">Destinatário: <span className="text-black">{reminderData.name}</span></p>
              <div className="bg-[#F5F4EF] rounded-[2rem] p-7 text-black font-bold text-[15px] leading-relaxed whitespace-pre-wrap min-h-[140px] border border-white shadow-inner italic">
                {reminderData.loading ? <div className="animate-pulse text-gray-300 text-center mt-8 uppercase font-black tracking-widest">A escrever cobrança...</div> : `"${reminderData.text}"`}
              </div>
            </div>
            <div className="p-8 pt-0">
              {!reminderData.loading && (
                <button onClick={() => { navigator.clipboard.writeText(reminderData.text); setReminderData(null); }} className="w-full bg-black text-white font-black py-5 rounded-[1.8rem] hover:bg-[#C41E1E] transition flex justify-center items-center gap-3 active:scale-95 shadow-2xl uppercase tracking-widest cursor-pointer">
                  <IconCopy size={20} /> Copiar para o Whats
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* MODAL ADMIN PARA QUANDO O UTILIZADOR JÁ ESTÁ LOGADO COM O GOOGLE */}
      {showAdminModal && !isAdmin && (
        <div className="fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-md z-[99999] flex items-center justify-center p-4 m-0 top-0 left-0">
          <div className="bg-white/95 backdrop-blur-2xl w-full max-w-sm rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20 animate-in zoom-in duration-200">
            <div className="p-6 text-center relative border-b border-gray-100">
              <button onClick={() => setShowAdminModal(false)} className="absolute right-6 top-6 bg-gray-100 text-gray-500 hover:text-black rounded-full p-2 transition cursor-pointer"><IconX size={16} /></button>
              <div className="w-16 h-16 bg-[#C41E1E]/10 text-[#C41E1E] rounded-full flex items-center justify-center mx-auto mb-4 relative"><IconLock size={28} /><span className="absolute -top-1 -right-1 text-black text-xs">✦</span></div>
              <h3 className="text-xl font-bold tracking-tight text-black uppercase">Cofre do Terceirão</h3>
            </div>
            <div className="p-6 space-y-4">
              {adminError && <div className="text-[#C41E1E] text-xs text-center bg-red-50 py-3 rounded-2xl font-bold uppercase border border-red-100">{adminError}</div>}
              <input type="text" placeholder="Utilizador" value={adminForm.user} onChange={(e) => setAdminForm(prev => ({...prev, user: e.target.value}))} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-medium text-black shadow-inner" />
              <input type="password" placeholder="Palavra-passe" value={adminForm.pass} onChange={(e) => setAdminForm(prev => ({...prev, pass: e.target.value}))} className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:bg-gray-100 outline-none transition font-medium text-black shadow-inner" />
              <button type="button" onClick={handleAdminSubmit} className="w-full bg-black text-white font-bold py-5 rounded-full hover:bg-[#C41E1E] transition active:scale-95 shadow-lg uppercase tracking-widest text-xs cursor-pointer">Acessar Painel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
