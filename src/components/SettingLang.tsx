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
				className="flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-sm rounded-lg"
			>
				<FaGlobe className="w-5 h-5 text-white" />
				<span className="text-white font-medium">{locale.toUpperCase()}</span>
			</button>

			{/* ドロップダウン */}
			{open && (
				<ul className="absolute right-0 mt-2 min-w-[5rem] bg-[rgba(var(--background),0.7)] backdrop-blur-md border border-white/20 rounded-lg shadow-xl z-50 divide-y divide-white/10 overflow-hidden">
					{routing.locales.map((l) => (
						<li key={l}>
							<button
								onClick={() => selectLocale(l)}
								className="block w-full px-4 py-2 text-sm text-center text-white hover:bg-white/20 transition-colors"
							>
								{l.toUpperCase()}
							</button>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
