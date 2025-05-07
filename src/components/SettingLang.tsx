'use client';

import { useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import { FaGlobe } from 'react-icons/fa';
import { useState, useRef, useEffect } from 'react';
import { routing } from '@/i18n/routing';

export default function SettingLang() {
	const locale = useLocale();
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	// 外側クリックでドロップダウンを閉じる
	useEffect(() => {
		function onClick(e: MouseEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener('mousedown', onClick);
		return () => document.removeEventListener('mousedown', onClick);
	}, []);

	// 言語選択時の遷移ハンドラ
	const selectLocale = (lang: string) => {
		setOpen(false);
		const newPath = pathname.replace(`/${locale}`, `/${lang}`);
		window.location.href = newPath;
	};

	return (
		<div ref={ref} className="relative inline-block">
			{/* トグルボタン */}
			<button
				onClick={() => setOpen(!open)}
				className="flex items-center space-x-2 px-3 py-2 bg-gray-900/70 backdrop-blur-md rounded-lg border border-white/10 shadow-lg hover:bg-gray-800/80 transition-all duration-300"
				aria-label="言語切替"
			>
				<FaGlobe className="w-4 h-4 text-accent" />
				<span className="text-white font-medium text-sm">{locale.toUpperCase()}</span>
			</button>

			{/* ドロップダウン */}
			{open && (
				<ul className="absolute right-0 mt-2 min-w-[5rem] bg-gray-900/80 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl z-50 overflow-hidden">
					{routing.locales.map((l) => (
						<li key={l} className="border-b border-white/5 last:border-b-0">
							<button
								onClick={() => selectLocale(l)}
								className={`block w-full px-4 py-2.5 text-sm text-center transition-colors ${
									l === locale 
									? 'bg-accent/20 text-accent font-medium' 
									: 'text-white hover:bg-white/10'
								}`}
							>
								{l === 'ja' ? '日本語' : 'English'}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
