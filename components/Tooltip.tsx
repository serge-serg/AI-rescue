'use client'
import { useState, useEffect, useRef } from 'react';

interface TooltipProps {
  content: React.ReactNode;
}

//-----------------------------


const Tooltip: React.FC<TooltipProps> = ({ content }) => {
  const [isVisible, setVisible] = useState(false);
  type Position = [VerticalPosition, HorizontalPosition];
  type VerticalPosition = 'top' | 'bottom';
  type HorizontalPosition = 'left' | 'right';

  const [position, setPosition] = useState<Position>(['top', 'left']);
  const [isAnimating, setIsAnimating] = useState(false);
  const closeIconRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  const tooltipRef = useRef<HTMLDivElement>(null);

  //function isSafariOrFirefox() {
  const ua = navigator.userAgent.toLowerCase();
  //return (ua.indexOf('safari') > -1 || ua.indexOf('firefox') > -1) && ua.indexOf('chrome') === -1;
  const isSafariOrFirefox = (ua.indexOf('safari') > -1 || ua.indexOf('firefox') > -1) && ua.indexOf('chrome') === -1;
  //}

  function recalculateTooltipSize(tooltipElement: HTMLDivElement) {
    if (!isSafariOrFirefox) return;

    // Сохраняем текущие стили
    const originalStyles = {
      width: tooltipElement.style.width,
      height: tooltipElement.style.height,
      maxHeight: tooltipElement.style.maxHeight,
      overflow: tooltipElement.style.overflow
    };

    // Убираем ограничения для измерения полного размера
    tooltipElement.style.width = 'auto';
    tooltipElement.style.height = 'auto';
    tooltipElement.style.maxHeight = 'none';
    tooltipElement.style.overflow = 'visible';

    // Измеряем полный размер
    const fullWidth = tooltipElement.offsetWidth;
    const fullHeight = tooltipElement.offsetHeight;

    // Рассчитываем новые размеры
    const area = fullWidth * fullHeight;
    let newWidth = Math.sqrt(area * 1.5);
    let newHeight = newWidth / 1.5;

    // Проверяем, не превышает ли ширина 90% от ширины экрана
    const maxWidth = window.innerWidth * 0.9;
    if (newWidth > maxWidth) {
      newWidth = maxWidth;
      newHeight = area / newWidth;
    }

    // Применяем новые размеры
    tooltipElement.style.width = `${newWidth}px`
    tooltipElement.style.height = `${newHeight}px`
    tooltipElement.style.maxHeight = `${newHeight}px`
    tooltipElement.style.overflow = 'auto'
    tooltipElement.style.opacity = '1'

    // Возвращаем оригинальные стили
    return originalStyles;
  }

  //-----------------------------

  useEffect(() => {
    console.log('isVisible?', isVisible,)
    if (isVisible && tooltipRef.current && isSafariOrFirefox) {
      const originalStyles = recalculateTooltipSize(tooltipRef.current);
      console.log('check tooltip params', { originalStyles, isSafariOrFirefox })

      // Возвращаем оригинальные стили при скрытии тултипа
      return () => {
        if (tooltipRef.current) {
          Object.assign(tooltipRef.current.style, originalStyles);
        }
      };
    }
    //-----------------------------
    if (isVisible && closeIconRef.current && containerRef.current) {
      const iconRect = closeIconRef.current.getBoundingClientRect()
      const spaceTop = iconRect.top + iconRect.height / 2
      const spaceLeft = iconRect.left + iconRect.width / 2
      const verticalPosition: VerticalPosition = spaceTop < window.innerHeight / 2 ? 'bottom' : 'top'
      const horizontalPosition: HorizontalPosition = spaceLeft > window.innerWidth / 2 ? 'left' : 'right'

      setPosition([verticalPosition, horizontalPosition])
      setTimeout(() => setIsAnimating(true), 50)
    } else {
      setIsAnimating(false)
    }
  }, [isVisible])


  const getTransformOrigin = () => {
    const [vertical, horizontal] = position
    return `${vertical === 'top' ? 'bottom' : 'top'} ${horizontal === 'left' ? 'right' : 'left'}`;
  };

  const getPositionStyles = () => {

    if (window.innerWidth < 1200) return 'offset-mobile'

    const [vertical, horizontal] = position;

    let classes = '';

    if (vertical === 'top') {
      classes += 'bottom-full mb-2 ';
    } else {
      classes += 'top-full mt-2 ';
    }

    if (horizontal === 'left') {
      classes += 'right-0 ';
    } else {
      classes += 'left-0 ';
    }
    return classes + 'transform';
  };

  return (
    <span className="component-tooltip xl:relative inline-block" style={{ margin: 'auto 4px' }} ref={containerRef}>
      <span
        ref={closeIconRef}
        className="bg-gray-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm cursor-pointer transition-transform duration-200 hover:scale-110 hover:bg-gray-400"
        onClick={() => setVisible(!isVisible)}
      >
        ?
      </span>
      {isVisible && (
        <span
          className={`absolute z-10 p-5 pr-0 bg-gray-100 text-black text-sm shadow-lg transition-all duration-300 ease-out ${getPositionStyles()}`}
          style={{
            display: 'block',
            minWidth: '200px',
            aspectRatio: '15 / 1',
            opacity: isSafariOrFirefox ? 1 : isAnimating ? 1 : 0.5,
            transform: `scale(${isAnimating ? 1 : 0.85})`,
            transformOrigin: getTransformOrigin(),
            left: '0px !important',
            right: '0px !important',
            width: 'max-content !important',
          }}
        >
          <span
            className="absolute text-black text-sm cursor-pointer"
            style={{
              backgroundColor: 'var(--color-dark-rose)',
              borderRadius: '50%',
              color: '#eee',
              fontSize: '1.2rem',
              fontWeight: 200,
              height: '1.5rem',
              lineHeight: '12px',
              outline: 'solid 3px',
              padding: '5px',
              paddingLeft: '6px',
              top: '-11px',
              width: '1.5rem',
              zIndex: 1,
            }}
            onClick={() => setVisible(false)}
          >
            &times;
          </span>
          <span ref={tooltipRef} className="relative pr-6 block" style={{
            maxHeight: isSafariOrFirefox? 'none' : '50vh',
            transform: 'translateY(-3px)',
            overflow: 'hidden auto',
            fontStyle: 'normal',
            fontWeight: 400,
            color: '#000',
          }}>
            {content}
          </span>
        </span>
      )}
    </span>
  );
};

export default Tooltip;
