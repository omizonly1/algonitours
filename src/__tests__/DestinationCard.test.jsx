import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import { describe, it, expect, vi } from 'vitest';

describe('DestinationCard Component', () => {
    const mockDest = {
        id: 1,
        name: 'Paris',
        country: 'France',
        image: 'paris.jpg',
        price: 'From $1000',
        link: '/paris',
        video: 'paris.mp4'
    };

    it('renders destination details', () => {
        render(
            <BrowserRouter>
                <DestinationCard dest={mockDest} index={0} />
            </BrowserRouter>
        );

        expect(screen.getByText('Paris')).toBeInTheDocument();
        expect(screen.getByText('France')).toBeInTheDocument();
        expect(screen.getByText('From $1000')).toBeInTheDocument();
        const image = screen.getByAltText('Paris');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'paris.jpg');
    });

    it('handles video playback on hover', () => {
        const playMock = vi.fn().mockResolvedValue(undefined);
        const pauseMock = vi.fn();

        vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(playMock);
        vi.spyOn(window.HTMLMediaElement.prototype, 'pause').mockImplementation(pauseMock);

        render(
            <BrowserRouter>
                <DestinationCard dest={mockDest} index={0} />
            </BrowserRouter>
        );

        const card = screen.getByRole('link').parentElement;

        fireEvent.mouseEnter(card);
        expect(playMock).toHaveBeenCalled();

        fireEvent.mouseLeave(card);
        expect(pauseMock).toHaveBeenCalled();
    });

    it('handles video play error gracefully', async () => {
        const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => { });
        const playMock = vi.fn().mockRejectedValue(new Error('Play failed'));

        vi.spyOn(window.HTMLMediaElement.prototype, 'play').mockImplementation(playMock);

        render(
            <BrowserRouter>
                <DestinationCard dest={mockDest} index={0} />
            </BrowserRouter>
        );

        const card = screen.getByRole('link').parentElement;
        fireEvent.mouseEnter(card);

        // Wait for the promise to reject and be caught
        await new Promise(resolve => setTimeout(resolve, 0));

        expect(consoleSpy).toHaveBeenCalledWith("Video play failed:", expect.any(Error));

        consoleSpy.mockRestore();
    });
});
